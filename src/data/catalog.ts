import type { AIModel, ModelFamily, Provider, Source } from '@/types/catalog';
const verified = '2026-09-11';
export const providers: Provider[] = [
 ['openai','OpenAI','General-purpose intelligence across language, reasoning, and multimodal systems.','https://openai.com','https://developers.openai.com/api/docs/models','#c6e2ed','spiral'],
 ['anthropic','Anthropic','The team behind Claude, building capable and interpretable AI systems.','https://www.anthropic.com','https://docs.anthropic.com','#eac4a1','elliptical'],
 ['google','Google DeepMind','Multimodal intelligence and research, home to the Gemini model family.','https://deepmind.google','https://ai.google.dev/gemini-api/docs/models','#aabcf8','spiral'],
 ['meta','Meta','The Llama ecosystem of open-weight language and multimodal models.','https://ai.meta.com','https://ai.meta.com/llama/get-started/','#98c8f0','ring'],
 ['deepseek','DeepSeek','Open-weight models exploring language, code, and reasoning.','https://www.deepseek.com','https://api-docs.deepseek.com','#729edf','spiral'],
 ['mistral','Mistral AI','Efficient language and multimodal models with open and commercial offerings.','https://mistral.ai','https://docs.mistral.ai','#d5a67d','ring'],
 ['qwen','Qwen','Alibaba’s family of language models with multilingual and reasoning capabilities.','https://qwen.ai','https://qwenlm.github.io','#b4a0e6','elliptical'],
 ['xai','xAI','The provider behind the Grok model family.','https://x.ai','https://docs.x.ai','#d0d5df','ring'],
 ['cohere','Cohere','Language models for enterprise retrieval, agents, and multilingual applications.','https://cohere.com','https://docs.cohere.com','#9dc9bb','elliptical'],
].map(([id,name,description,websiteUrl,documentationUrl,color,signature])=>({id,slug:id,name,description,websiteUrl,documentationUrl,color,signature:signature as Provider['signature'],published:true}));
export const families: ModelFamily[] = [
 ['openai-gpt','openai','GPT','Language, code, and multimodal understanding.'],
 ['anthropic-claude','anthropic','Claude','Claude models for complex language and coding tasks.'],
 ['google-gemini','google','Gemini','Native multimodal models from Google.'],
 ['meta-llama','meta','Llama','Open-weight models from Meta.'],
 ['deepseek-r1','deepseek','DeepSeek-R1','Reasoning models trained with reinforcement learning.'],
 ['mistral-small','mistral','Mistral Small','Compact language and vision models.'],
 ['qwen-qwen3','qwen','Qwen3','Hybrid thinking and non-thinking models.'],
 ['xai-grok','xai','Grok','Language models from xAI.'],
 ['cohere-command','cohere','Command','Enterprise language and agent models.'],
].map(([id,providerId,name,description],i)=>({id,providerId,slug:id,name,description,classificationType:'official',sortOrder:i}));
function model(id:string,providerId:string,familyId:string,name:string,description:string,officialUrl:string,extra:Partial<AIModel>={}):AIModel {
 return {id,providerId,familyId,slug:id,name,description,officialUrl,status:'unknown',releaseDate:null,contextWindow:null,apiAvailable:null,openWeights:null,inputModalities:[],outputModalities:[],capabilities:[],docsUrl:null,pricingUrl:null,lastVerifiedAt:verified,published:true,...extra};
}
export const models: AIModel[] = [
 model('gpt-4-1','openai','openai-gpt','GPT-4.1','A general-purpose model for instruction following, coding, and tool use with a long context window.','https://developers.openai.com/api/docs/models/gpt-4.1',{contextWindow:1047576,apiAvailable:true,inputModalities:['Text','Image'],outputModalities:['Text'],capabilities:['Text','Vision','Code','Tool Use'],docsUrl:'https://developers.openai.com/api/docs/models/gpt-4.1'}),
 model('gpt-4-1-mini','openai','openai-gpt','GPT-4.1 mini','A smaller GPT-4.1 variant designed for efficient language and coding tasks.','https://openai.com/index/gpt-4-1/',{releaseDate:'2025-04-14',capabilities:['Text','Code']}),
 model('gpt-4-1-nano','openai','openai-gpt','GPT-4.1 nano','The compact member of the GPT-4.1 family.','https://openai.com/index/gpt-4-1/',{releaseDate:'2025-04-14',capabilities:['Text']}),
 model('claude-opus-4','anthropic','anthropic-claude','Claude Opus 4','A Claude model designed for complex coding and sustained agentic work.','https://www.anthropic.com/news/claude-4',{releaseDate:'2025-05-22',capabilities:['Text','Code','Reasoning']}),
 model('claude-sonnet-4','anthropic','anthropic-claude','Claude Sonnet 4','A Claude model balancing performance and efficiency for coding and reasoning.','https://www.anthropic.com/news/claude-4',{releaseDate:'2025-05-22',capabilities:['Text','Code','Reasoning']}),
 model('gemini-2-5-pro','google','google-gemini','Gemini 2.5 Pro','A thinking model with multimodal understanding and long-context reasoning.','https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro',{contextWindow:1048576,inputModalities:['Text','Image','Audio','Video'],outputModalities:['Text'],capabilities:['Text','Vision','Audio Input','Video','Reasoning','Code']}),
 model('gemini-2-5-flash','google','google-gemini','Gemini 2.5 Flash','An efficient thinking model for multimodal tasks.','https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash',{contextWindow:1048576,inputModalities:['Text','Image','Audio','Video'],outputModalities:['Text'],capabilities:['Text','Vision','Audio Input','Video','Reasoning']}),
 model('llama-4-scout','meta','meta-llama','Llama 4 Scout','An open-weight mixture-of-experts model for image and text understanding.','https://ai.meta.com/blog/llama-4-multimodal-intelligence/',{releaseDate:'2025-04-05',contextWindow:10000000,openWeights:true,inputModalities:['Text','Image'],outputModalities:['Text'],capabilities:['Text','Vision']}),
 model('llama-4-maverick','meta','meta-llama','Llama 4 Maverick','A multimodal mixture-of-experts model with 128 experts.','https://ai.meta.com/blog/llama-4-multimodal-intelligence/',{releaseDate:'2025-04-05',openWeights:true,inputModalities:['Text','Image'],outputModalities:['Text'],capabilities:['Text','Vision','Code']}),
 model('deepseek-r1','deepseek','deepseek-r1','DeepSeek-R1','An open-weight reasoning model trained with large-scale reinforcement learning.','https://api-docs.deepseek.com/news/news250120/',{releaseDate:'2025-01-20',openWeights:true,capabilities:['Text','Reasoning','Code']}),
 model('mistral-small-3-1','mistral','mistral-small','Mistral Small 3.1','An efficient open-weight model for language, image understanding, and function calling.','https://mistral.ai/news/mistral-small-3-1/',{releaseDate:'2025-03-17',contextWindow:128000,openWeights:true,inputModalities:['Text','Image'],outputModalities:['Text'],capabilities:['Text','Vision','Function Calling']}),
 model('qwen3-235b-a22b','qwen','qwen-qwen3','Qwen3-235B-A22B','A mixture-of-experts model combining thinking and non-thinking modes.','https://qwenlm.github.io/blog/qwen3/',{releaseDate:'2025-04-29',openWeights:true,capabilities:['Text','Reasoning','Code']}),
 model('qwen3-30b-a3b','qwen','qwen-qwen3','Qwen3-30B-A3B','A compact mixture-of-experts member of the Qwen3 family.','https://qwenlm.github.io/blog/qwen3/',{releaseDate:'2025-04-29',openWeights:true,capabilities:['Text','Reasoning','Code']}),
 model('grok-3','xai','xai-grok','Grok 3','A member of the Grok family introduced with reasoning-focused capabilities.','https://x.ai/news/grok-3',{capabilities:['Text','Reasoning']}),
 model('command-a','cohere','cohere-command','Command A','An enterprise language model for retrieval, multilingual tasks, and tool use.','https://docs.cohere.com/docs/command-a',{contextWindow:256000,apiAvailable:true,capabilities:['Text','Tool Use'],docsUrl:'https://docs.cohere.com/docs/command-a'}),
 model('command-a-reasoning','cohere','cohere-command','Command A Reasoning','A hybrid reasoning model for multilingual agentic tasks.','https://docs.cohere.com/docs/command-a-reasoning/',{contextWindow:256000,apiAvailable:true,capabilities:['Text','Reasoning','Tool Use'],docsUrl:'https://docs.cohere.com/docs/command-a-reasoning/'}),
];
export const capabilities = ['Text','Vision','Image Generation','Audio Input','Audio Output','Video','Reasoning','Tool Use','Function Calling','Web/Search','Code','Embeddings','Realtime','Multimodal'].map(name=>({id:name.toLowerCase().replace(/[^a-z]+/g,'-'),name,category:'AI Universe classification'}));
export const sources: Source[] = models.map(m=>({id:`source-${m.id}`,modelId:m.id,providerId:m.providerId,url:m.officialUrl,sourceType:m.docsUrl?'documentation':'announcement',title:m.docsUrl?'Official model documentation':'Official provider source',verifiedAt:verified,lastCheckedAt:verified,notes:'Only the displayed claims were checked. Historical announcements do not establish current API availability or lifecycle status.'}));
export const modelCapabilities = models.flatMap(m=>m.capabilities.map(capability=>({modelId:m.id,capabilityId:capabilities.find(c=>c.name===capability)!.id,confidence:'verified',sourceId:`source-${m.id}`})));
export const getProvider = (id:string) => providers.find(p=>p.id===id);
export const getModel = (id:string) => models.find(m=>m.id===id);
export const getFamily = (id:string) => families.find(f=>f.id===id);
export const providerModels = (id:string) => models.filter(m=>m.providerId===id && m.published);
