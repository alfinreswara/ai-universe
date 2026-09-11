import { create } from 'zustand';
import type { CameraState,Selection,Quality } from '@/types/catalog';
import { parentSelection } from '@/lib/catalog';
import { track } from '@/lib/analytics';
export const selectionState=(s:Selection):CameraState=>s.model?'MODEL':s.family?'FAMILY':s.provider?'PROVIDER':'UNIVERSE';
type State={selection:Selection;cameraState:CameraState;quality:Quality;autoQuality:boolean;reducedMotion:boolean;searchOpen:boolean;entered:boolean;fallback:boolean;labels:boolean;revision:number;select:(s:Selection,search?:boolean)=>void;back:()=>void;setQuality:(q:Quality,auto?:boolean)=>void;setSearch:(open:boolean)=>void;enter:()=>void;reset:()=>void;};
export const useUniverse=create<State>((set,get)=>({selection:{},cameraState:'INTRO',quality:'MEDIUM',autoQuality:true,reducedMotion:false,searchOpen:false,entered:false,fallback:false,labels:true,revision:0,
 select:(selection,search=false)=>{set({selection,cameraState:search?'SEARCH_TARGET':selectionState(selection),entered:true,revision:get().revision+1});track(selection.model?'model_selected':selection.family?'family_selected':'provider_selected',{id:selection.model??selection.family??selection.provider??'universe'});},
 back:()=>get().select(parentSelection(get().selection)),setQuality:(quality,auto=false)=>{set({quality,autoQuality:auto});track('quality_changed',{quality});},setSearch:(searchOpen)=>{set({searchOpen});if(searchOpen)track('search_opened');},enter:()=>{set({entered:true,cameraState:'UNIVERSE',revision:get().revision+1});track('universe_entered');try{localStorage.setItem('ai-universe-entered','1')}catch{}},reset:()=>get().select({})}));
