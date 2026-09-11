from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
root = Path('out')
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
        path=root/unquote(urlsplit(url).path).lstrip('/')
        if not path.is_file() and not (path/'index.html').is_file(): errors.append((str(page),url))
assert not errors, errors
for path in ['models/openai/gpt-4-1/index.html','providers/meta/index.html']:
    html=(root/path).read_text()
    assert '<link rel="canonical"' in html
    assert 'https://' in html
assert '1.05M tokens' in (root/'models/openai/gpt-4-1/index.html').read_text()
print(f'PASS: {len(pages)} HTML pages, all local links/assets, canonical model/provider metadata and model content.')
