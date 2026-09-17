import os
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
root = Path('out')
base_path = os.environ.get('NEXT_PUBLIC_BASE_PATH', '').rstrip('/')
class Links(HTMLParser):
    def __init__(self):
        super().__init__(); self.urls=[]
    def handle_starttag(self, tag, attrs):
        for key,value in attrs:
            if key in ('href','src') and value and value.startswith('/') and not value.startswith('//'):
                self.urls.append(value)
errors=[];pages=list(root.rglob('*.html'))
for page in pages:
    parser=Links();parser.feed(page.read_text())
    for url in parser.urls:
        local_path = unquote(urlsplit(url).path)
        if base_path and not (local_path == base_path or local_path.startswith(base_path + '/')):
            errors.append((str(page), 'Missing base path: ' + url)); continue
        path=root/local_path.removeprefix(base_path).lstrip('/')
        if not path.is_file() and not (path/'index.html').is_file(): errors.append((str(page),url))
assert not errors, errors
for path in ['models/openai/gpt-4-1/index.html','providers/meta/index.html']:
    html=(root/path).read_text()
    assert '<link rel="canonical"' in html
    assert 'https://' in html
assert '1.05M tokens' in (root/'models/openai/gpt-4-1/index.html').read_text()
print(f'PASS: {len(pages)} HTML pages, all local links/assets, canonical model/provider metadata and model content.')

expected = os.environ.get('NEXT_PUBLIC_SITE_URL')
if expected:
    model_url = expected.rstrip('/') + base_path + '/models/openai/gpt-4-1/'
    assert model_url in (root/'models/openai/gpt-4-1/index.html').read_text()
    assert model_url in (root/'sitemap.xml').read_text()
    print('PASS: deployed model canonical and sitemap include the repository base path.')
