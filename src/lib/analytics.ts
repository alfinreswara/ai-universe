export type AnalyticsEvent='universe_entered'|'provider_selected'|'family_selected'|'model_selected'|'search_opened'|'search_completed'|'model_source_clicked'|'quality_changed'|'fallback_used';
// Local, opt-in integration point; no cookies, identifiers, search text, or network requests.
export function track(event:AnalyticsEvent,detail:Record<string,string>={}){if(typeof window!=='undefined')window.dispatchEvent(new CustomEvent('ai-universe:analytics',{detail:{event,...detail}}));}
