"use strict";(self.webpackChunkudemy_recipe=self.webpackChunkudemy_recipe||[]).push([[261],{3261:(gt,j,c)=>{c.r(j),c.d(j,{RecipeModule:()=>nt});var f=c(6019),h=c(7537),_=c(1277),r=c(3668),p=c(4753),pe=c(2210),ge=c(8305),U=c(5947),$=c(2997),m=c(2049),N=c(3970),M=c(7518),k=c(9495),fe=c(5488),V=c(461),q=c(7905),me=(c(2115),c(6293)),o=c(5023),H=c(4213),ve=c(1177);function P(i,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new o.WA("invalid-argument",`Invalid options passed to function ${i}(): You cannot specify both "merge" and "mergeFields".`);return e}function K(){if("undefined"==typeof Uint8Array)throw new o.WA("unimplemented","Uint8Arrays are not available in this environment.")}function X(){if(!(0,o.Me)())throw new o.WA("unimplemented","Blobs are unavailable in Firestore in this environment.")}class A{constructor(e){this._delegate=e}static fromBase64String(e){return X(),new A(o.Jj.fromBase64String(e))}static fromUint8Array(e){return K(),new A(o.Jj.fromUint8Array(e))}toBase64(){return X(),this._delegate.toBase64()}toUint8Array(){return K(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}function G(i){return function(i,e){if("object"!=typeof i||null===i)return!1;const t=i;for(const n of["next","error","complete"])if(n in t&&"function"==typeof t[n])return!0;return!1}(i)}class xe{enableIndexedDbPersistence(e,t){return(0,o.ST)(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return(0,o.fH)(e._delegate)}clearIndexedDbPersistence(e){return(0,o.Fc)(e._delegate)}}class ee{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof o.l7||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&(0,o.yq)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t,n={}){(0,o.at)(this._delegate,e,t,n)}enableNetwork(){return(0,o.Ix)(this._delegate)}disableNetwork(){return(0,o.TF)(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,(0,o.Wi)("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return(0,o.Mx)(this._delegate)}onSnapshotsInSync(e){return(0,o.sc)(this._delegate,e)}get app(){if(!this._appCompat)throw new o.WA("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Z(this,(0,o.hJ)(this._delegate,e))}catch(t){throw l(t,"collection()","Firestore.collection()")}}doc(e){try{return new v(this,(0,o.JU)(this._delegate,e))}catch(t){throw l(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new u(this,(0,o.B$)(this._delegate,e))}catch(t){throw l(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return(0,o.i3)(this._delegate,t=>e(new te(this,t)))}batch(){return(0,o.qY)(this._delegate),new re(new o.PU(this._delegate,e=>(0,o.GL)(this._delegate,e)))}loadBundle(e){return(0,o.Pb)(this._delegate,e)}namedQuery(e){return(0,o.L$)(this._delegate,e).then(t=>t?new u(this,t):null)}}class E extends o.u7{constructor(e){super(),this.firestore=e}convertBytes(e){return new A(new o.Jj(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return v.forKey(t,this.firestore,null)}}class te{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new E(e)}get(e){const t=x(e);return this._delegate.get(t).then(n=>new I(this._firestore,new o.xU(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,t.converter)))}set(e,t,n){const s=x(e);return n?(P("Transaction.set",n),this._delegate.set(s,t,n)):this._delegate.set(s,t),this}update(e,t,n,...s){const a=x(e);return 2===arguments.length?this._delegate.update(a,t):this._delegate.update(a,t,n,...s),this}delete(e){const t=x(e);return this._delegate.delete(t),this}}class re{constructor(e){this._delegate=e}set(e,t,n){const s=x(e);return n?(P("WriteBatch.set",n),this._delegate.set(s,t,n)):this._delegate.set(s,t),this}update(e,t,n,...s){const a=x(e);return 2===arguments.length?this._delegate.update(a,t):this._delegate.update(a,t,n,...s),this}delete(e){const t=x(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class w{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new o.$q(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new T(this._firestore,n),null!=t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=w.INSTANCES;let s=n.get(e);s||(s=new WeakMap,n.set(e,s));let a=s.get(t);return a||(a=new w(e,new E(e),t),s.set(t,a)),a}}w.INSTANCES=new WeakMap;class v{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new E(e)}static forPath(e,t,n){if(e.length%2!=0)throw new o.WA("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new v(t,new o.my(t._delegate,n,new o.Ky(e)))}static forKey(e,t,n){return new v(t,new o.my(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Z(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Z(this.firestore,(0,o.hJ)(this._delegate,e))}catch(t){throw l(t,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=(0,H.m9)(e))instanceof o.my&&(0,o.Eo)(this._delegate,e)}set(e,t){t=P("DocumentReference.set",t);try{return t?(0,o.pl)(this._delegate,e,t):(0,o.pl)(this._delegate,e)}catch(n){throw l(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?(0,o.r7)(this._delegate,e):(0,o.r7)(this._delegate,e,t,...n)}catch(s){throw l(s,"updateDoc()","DocumentReference.update()")}}delete(){return(0,o.oe)(this._delegate)}onSnapshot(...e){const t=ie(e),n=ne(e,s=>new I(this.firestore,new o.xU(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return(0,o.cf)(this._delegate,t,n)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?(0,o.kl)(this._delegate):"server"===(null==e?void 0:e.source)?(0,o.Xk)(this._delegate):(0,o.QT)(this._delegate),t.then(n=>new I(this.firestore,new o.xU(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new v(this.firestore,this._delegate.withConverter(e?w.getInstance(this.firestore,e):null))}}function l(i,e,t){return i.message=i.message.replace(e,t),i}function ie(i){for(const e of i)if("object"==typeof e&&!G(e))return e;return{}}function ne(i,e){var t,n;let s;return s=G(i[0])?i[0]:G(i[1])?i[1]:"function"==typeof i[0]?{next:i[0],error:i[1],complete:i[2]}:{next:i[1],error:i[2],complete:i[3]},{next:a=>{s.next&&s.next(e(a))},error:null===(t=s.error)||void 0===t?void 0:t.bind(s),complete:null===(n=s.complete)||void 0===n?void 0:n.bind(s)}}class I{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new v(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return(0,o.qK)(this._delegate,e._delegate)}}class T extends I{data(e){const t=this._delegate.data(e);return(0,o.K9)(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class u{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new E(e)}where(e,t,n){try{return new u(this.firestore,(0,o.IO)(this._delegate,(0,o.ar)(e,t,n)))}catch(s){throw l(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new u(this.firestore,(0,o.IO)(this._delegate,(0,o.Xo)(e,t)))}catch(n){throw l(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new u(this.firestore,(0,o.IO)(this._delegate,(0,o.b9)(e)))}catch(t){throw l(t,"limit()","Query.limit()")}}limitToLast(e){try{return new u(this.firestore,(0,o.IO)(this._delegate,(0,o.vh)(e)))}catch(t){throw l(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new u(this.firestore,(0,o.IO)(this._delegate,(0,o.e0)(...e)))}catch(t){throw l(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new u(this.firestore,(0,o.IO)(this._delegate,(0,o.TQ)(...e)))}catch(t){throw l(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new u(this.firestore,(0,o.IO)(this._delegate,(0,o.Lx)(...e)))}catch(t){throw l(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new u(this.firestore,(0,o.IO)(this._delegate,(0,o.Wu)(...e)))}catch(t){throw l(t,"endAt()","Query.endAt()")}}isEqual(e){return(0,o.iE)(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?(0,o.UQ)(this._delegate):"server"===(null==e?void 0:e.source)?(0,o.zN)(this._delegate):(0,o.PL)(this._delegate),t.then(n=>new J(this.firestore,new o.W(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){const t=ie(e),n=ne(e,s=>new J(this.firestore,new o.W(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return(0,o.cf)(this._delegate,t,n)}withConverter(e){return new u(this.firestore,this._delegate.withConverter(e?w.getInstance(this.firestore,e):null))}}class Ce{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new T(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class J{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new u(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new T(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new Ce(this._firestore,t))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new T(this._firestore,n))})}isEqual(e){return(0,o.qK)(this._delegate,e._delegate)}}class Z extends u{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new v(this.firestore,e):null}doc(e){try{return new v(this.firestore,void 0===e?(0,o.JU)(this._delegate):(0,o.JU)(this._delegate,e))}catch(t){throw l(t,"doc()","CollectionReference.doc()")}}add(e){return(0,o.ET)(this._delegate,e).then(t=>new v(this.firestore,t))}isEqual(e){return(0,o.Eo)(this._delegate,e._delegate)}withConverter(e){return new Z(this.firestore,this._delegate.withConverter(e?w.getInstance(this.firestore,e):null))}}function x(i){return(0,o.Cf)(i,o.my)}class B{constructor(...e){this._delegate=new o.Lz(...e)}static documentId(){return new B(o.Xb.keyField().canonicalString())}isEqual(e){return(e=(0,H.m9)(e))instanceof o.Lz&&this._delegate._internalPath.isEqual(e._internalPath)}}class b{constructor(e){this._delegate=e}static serverTimestamp(){const e=(0,o.Bt)();return e._methodName="FieldValue.serverTimestamp",new b(e)}static delete(){const e=(0,o.AK)();return e._methodName="FieldValue.delete",new b(e)}static arrayUnion(...e){const t=(0,o.vr)(...e);return t._methodName="FieldValue.arrayUnion",new b(t)}static arrayRemove(...e){const t=(0,o.Ab)(...e);return t._methodName="FieldValue.arrayRemove",new b(t)}static increment(e){const t=(0,o.nP)(e);return t._methodName="FieldValue.increment",new b(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}const Ze={Firestore:ee,GeoPoint:o.F8,Timestamp:o.EK,Blob:A,Transaction:te,WriteBatch:re,DocumentReference:v,DocumentSnapshot:I,Query:u,QueryDocumentSnapshot:T,QuerySnapshot:J,CollectionReference:Z,FieldPath:B,FieldValue:b,setLogLevel:function(i){(0,o.Ub)(i)},CACHE_SIZE_UNLIMITED:o.IX};var i;(function(i,e){i.INTERNAL.registerComponent(new ve.wA("firestore-compat",t=>((e,t)=>new ee(e,t,new xe))(t.getProvider("app-compat").getImmediate(),t.getProvider("firestore").getImmediate()),"PUBLIC").setServiceProps(Object.assign({},Ze)))})(i=me.Z),i.registerVersion("@firebase/firestore-compat","0.1.8");var y=c(7843),Te=c(7798);function se(i,e){return function(i,e=pe.z){return new ge.y(t=>{let n;return null!=e?e.schedule(()=>{n=i.onSnapshot({includeMetadataChanges:!0},t)}):n=i.onSnapshot({includeMetadataChanges:!0},t),()=>{null!=n&&n()}})}(i,e)}function Y(i,e){return se(i,e).pipe((0,p.U)(t=>({payload:t,type:"query"})))}function O(i,e){return Y(i,e).pipe((0,N.O)(void 0),(0,M.G)(),(0,p.U)(([t,n])=>{const s=n.payload.docChanges(),a=s.map(d=>({type:d.type,payload:d}));return t&&JSON.stringify(t.payload.metadata)!==JSON.stringify(n.payload.metadata)&&n.payload.docs.forEach((d,g)=>{const C=s.find(S=>S.doc.ref.isEqual(d.ref)),L=null==t?void 0:t.payload.docs.find(S=>S.ref.isEqual(d.ref));C&&JSON.stringify(C.doc.metadata)===JSON.stringify(d.metadata)||!C&&L&&JSON.stringify(L.metadata)===JSON.stringify(d.metadata)||a.push({type:"modified",payload:{oldIndex:g,newIndex:g,type:"modified",doc:d}})}),a}))}function oe(i,e,t){return O(i,t).pipe((0,k.R)((n,s)=>function(i,e,t){return e.forEach(n=>{t.indexOf(n.type)>-1&&(i=function(i,e){switch(e.type){case"added":if(!i[e.newIndex]||!i[e.newIndex].doc.ref.isEqual(e.doc.ref))return Q(i,e.newIndex,0,e);break;case"modified":if(null==i[e.oldIndex]||i[e.oldIndex].doc.ref.isEqual(e.doc.ref)){if(e.oldIndex!==e.newIndex){const t=i.slice();return t.splice(e.oldIndex,1),t.splice(e.newIndex,0,e),t}return Q(i,e.newIndex,1,e)}break;case"removed":if(i[e.oldIndex]&&i[e.oldIndex].doc.ref.isEqual(e.doc.ref))return Q(i,e.oldIndex,1)}return i}(i,n))}),i}(n,s.map(a=>a.payload),e),[]),(0,fe.x)(),(0,p.U)(n=>n.map(s=>({type:s.type,payload:s}))))}function Q(i,e,t,...n){const s=i.slice();return s.splice(e,t,...n),s}function ae(i){return(!i||0===i.length)&&(i=["added","removed","modified"]),i}c(7892);class ce{constructor(e,t,n){this.ref=e,this.query=t,this.afs=n}stateChanges(e){let t=O(this.query,this.afs.schedulers.outsideAngular);return e&&e.length>0&&(t=t.pipe((0,p.U)(n=>n.filter(s=>e.indexOf(s.type)>-1)))),t.pipe((0,N.O)(void 0),(0,M.G)(),(0,V.h)(([n,s])=>s.length>0||!n),(0,p.U)(([n,s])=>s),m.iC)}auditTrail(e){return this.stateChanges(e).pipe((0,k.R)((t,n)=>[...t,...n],[]))}snapshotChanges(e){const t=ae(e);return oe(this.query,t,this.afs.schedulers.outsideAngular).pipe(m.iC)}valueChanges(e={}){return Y(this.query,this.afs.schedulers.outsideAngular).pipe((0,p.U)(t=>t.payload.docs.map(n=>e.idField?Object.assign(Object.assign({},n.data()),{[e.idField]:n.id}):n.data())),m.iC)}get(e){return(0,U.D)(this.query.get(e)).pipe(m.iC)}add(e){return this.ref.add(e)}doc(e){return new de(this.ref.doc(e),this.afs)}}class de{constructor(e,t){this.ref=e,this.afs=t}set(e,t){return this.ref.set(e,t)}update(e){return this.ref.update(e)}delete(){return this.ref.delete()}collection(e,t){const n=this.ref.collection(e),{ref:s,query:a}=le(n,t);return new ce(s,a,this.afs)}snapshotChanges(){return function(i,e){return se(i,e).pipe((0,N.O)(void 0),(0,M.G)(),(0,p.U)(([t,n])=>n.exists?(null==t?void 0:t.exists)?{payload:n,type:"modified"}:{payload:n,type:"added"}:{payload:n,type:"removed"}))}(this.ref,this.afs.schedulers.outsideAngular).pipe(m.iC)}valueChanges(e={}){return this.snapshotChanges().pipe((0,p.U)(({payload:t})=>e.idField?Object.assign(Object.assign({},t.data()),{[e.idField]:t.id}):t.data()))}get(e){return(0,U.D)(this.ref.get(e)).pipe(m.iC)}}class qe{constructor(e,t){this.query=e,this.afs=t}stateChanges(e){return e&&0!==e.length?O(this.query,this.afs.schedulers.outsideAngular).pipe((0,p.U)(t=>t.filter(n=>e.indexOf(n.type)>-1)),(0,V.h)(t=>t.length>0),m.iC):O(this.query,this.afs.schedulers.outsideAngular).pipe(m.iC)}auditTrail(e){return this.stateChanges(e).pipe((0,k.R)((t,n)=>[...t,...n],[]))}snapshotChanges(e){const t=ae(e);return oe(this.query,t,this.afs.schedulers.outsideAngular).pipe(m.iC)}valueChanges(e={}){return Y(this.query,this.afs.schedulers.outsideAngular).pipe((0,p.U)(n=>n.payload.docs.map(s=>e.idField?Object.assign({[e.idField]:s.id},s.data()):s.data())),m.iC)}get(e){return(0,U.D)(this.query.get(e)).pipe(m.iC)}}const Ee=new r.OlP("angularfire2.enableFirestorePersistence"),Oe=new r.OlP("angularfire2.firestore.persistenceSettings"),Le=new r.OlP("angularfire2.firestore.settings"),De=new r.OlP("angularfire2.firestore.use-emulator");function le(i,e=(t=>t)){return{query:e(i),ref:i}}let Ne=(()=>{class i{constructor(t,n,s,a,d,g,C,L,S,st,ot,at,ct,dt,lt,ut,yt){this.schedulers=C;const D=(0,q.on)(t,g,n),z=S;st&&(0,y.nw)(D,g,ot,ct,dt,lt,at,ut),[this.firestore,this.persistenceEnabled$]=(0,q.cc)(`${D.name}.firestore`,"AngularFirestore",D.name,()=>{const F=g.runOutsideAngular(()=>D.firestore());if(a&&F.settings(a),z&&F.useEmulator(...z),s&&!(0,f.PM)(d)){const ht=()=>{try{return(0,U.D)(F.enablePersistence(L||void 0).then(()=>!0,()=>!1))}catch(pt){return"undefined"!=typeof console&&console.warn(pt),(0,$.of)(!1)}};return[F,g.runOutsideAngular(ht)]}return[F,(0,$.of)(!1)]},[a,z,s])}collection(t,n){let s;s="string"==typeof t?this.firestore.collection(t):t;const{ref:a,query:d}=le(s,n),g=this.schedulers.ngZone.run(()=>a);return new ce(g,d,this)}collectionGroup(t,n){const s=n||(d=>d),a=this.firestore.collectionGroup(t);return new qe(s(a),this)}doc(t){let n;n="string"==typeof t?this.firestore.doc(t):t;const s=this.schedulers.ngZone.run(()=>n);return new de(s,this)}createId(){return this.firestore.collection("_").doc().id}}return i.\u0275fac=function(t){return new(t||i)(r.LFG(q.Dh),r.LFG(q.xv,8),r.LFG(Ee,8),r.LFG(Le,8),r.LFG(r.Lbi),r.LFG(r.R0b),r.LFG(m.HU),r.LFG(Oe,8),r.LFG(De,8),r.LFG(y.zQ,8),r.LFG(y.Qv,8),r.LFG(y.L6,8),r.LFG(y._Q,8),r.LFG(y.rT,8),r.LFG(y.lh,8),r.LFG(y.f7,8),r.LFG(Te.nm,8))},i.\u0275prov=r.Yz7({token:i,factory:i.\u0275fac,providedIn:"any"}),i})(),R=(()=>{class i{constructor(t){this.firestore=t,this.activeRecipeChanged=new r.vpe,this.recipeCollection=this.firestore.collection("recipes")}ngOnInit(){}getRecipes(){return this.recipeCollection.get().pipe((0,p.U)(t=>t.docs)).pipe((0,p.U)(t=>t.map(n=>Object.assign(Object.assign({},n.data()),{id:n.id}))))}addNewRecipe(t){return this.recipeCollection.add(t)}update(t,n){return this.recipeCollection.doc(t).update(n)}setActiveRecipe(t){this.activeRecipe=t,this.activeRecipeChanged.emit()}removeRecipe(t){return this.recipeCollection.doc(t).delete()}getRecipe(t){return this.recipeCollection.doc(t).get().pipe((0,p.U)(n=>n.data()))}}return i.\u0275fac=function(t){return new(t||i)(r.LFG(Ne))},i.\u0275prov=r.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var W=c(3339);let Me=(()=>{class i{constructor(t,n){this.service=t,this.loadingService=n}resolve(t){const n=t.paramMap.get("id");return this.loadingService.toggle(!0),n?this.service.getRecipe(n):Promise.reject()}}return i.\u0275fac=function(t){return new(t||i)(r.LFG(R),r.LFG(W.b))},i.\u0275prov=r.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var ke=c(259),ue=c(7524);function Pe(i,e){if(1&i&&(r.TgZ(0,"div"),r._UZ(1,"img",13),r.qZA()),2&i){const t=r.oxw(2);r.xp6(1),r.s9C("src",t.data.photoUrl,r.LSH),r.s9C("alt",t.data.name)}}function Ge(i,e){if(1&i){const t=r.EpF();r.ynx(0),r.TgZ(1,"a",14),r.NdJ("click",function(s){return r.CHM(t),r.oxw(2).remove(s)}),r._uU(2,"Delete Recepie"),r.qZA(),r.TgZ(3,"a",15),r._uU(4,"Edit Recipe"),r.qZA(),r.BQk()}if(2&i){const t=r.oxw(2);r.xp6(3),r.MGl("routerLink","/",t.recipeId,"/edit")}}function Je(i,e){if(1&i&&(r.ynx(0),r.TgZ(1,"div",16),r._UZ(2,"input",17),r.TgZ(3,"label",18),r._uU(4),r.qZA(),r.qZA(),r.BQk()),2&i){const t=e.$implicit,n=e.index;r.xp6(2),r.hYB("id","checkbox-",n,"-",t,""),r.xp6(1),r.hYB("for","checkbox-",n,"-",t,""),r.xp6(1),r.Oqu(t)}}function Be(i,e){if(1&i){const t=r.EpF();r.ynx(0),r.TgZ(1,"div",4),r.YNc(2,Pe,2,2,"div",5),r.TgZ(3,"div",6),r.TgZ(4,"h1",7),r.TgZ(5,"span",8),r._uU(6),r.qZA(),r.YNc(7,Ge,5,1,"ng-container",5),r.ALo(8,"async"),r.qZA(),r.TgZ(9,"div",9),r._uU(10),r.qZA(),r.qZA(),r.qZA(),r._UZ(11,"hr"),r.TgZ(12,"h4",10),r._uU(13,"Ingredients"),r.qZA(),r.YNc(14,Je,5,5,"ng-container",11),r.TgZ(15,"button",12),r.NdJ("click",function(){return r.CHM(t),r.oxw().addIngredients()}),r._uU(16," + Add all to Shopping List "),r.qZA(),r._UZ(17,"hr"),r.TgZ(18,"h4",10),r._uU(19,"Directions"),r.qZA(),r.TgZ(20,"div",9),r._uU(21),r.qZA(),r.BQk()}if(2&i){const t=r.oxw();r.xp6(2),r.Q6J("ngIf",t.data.photoUrl),r.xp6(4),r.Oqu(t.data.name),r.xp6(1),r.Q6J("ngIf",r.lcZ(8,6,t.isLoggedIn)),r.xp6(3),r.Oqu(t.data.description),r.xp6(4),r.Q6J("ngForOf",t.data.ingredients),r.xp6(7),r.Oqu(t.data.directions)}}function Ye(i,e){1&i&&(r.TgZ(0,"div",19),r.TgZ(1,"h2"),r._uU(2,"Recipe not found."),r.qZA(),r.TgZ(3,"a",20),r._uU(4,"Browser more recipes."),r.qZA(),r.qZA())}let Qe=(()=>{class i{constructor(t,n,s,a,d,g){this.router=t,this.recipeService=n,this.activeRoute=s,this.shoppingListService=a,this.userService=d,this.loadingService=g,this.recipeId=s.snapshot.paramMap.get("id")||""}ngOnInit(){this.isLoggedIn=this.userService.isAuthenticated(),this.subscription=this.activeRoute.data.subscribe(t=>{this.data=t.data,this.loadingService.toggle(!1)})}ngOnDestroy(){this.subscription.unsubscribe()}remove(t){t.preventDefault(),this.recipeService.removeRecipe(this.recipeId).then(()=>{this.router.navigate(["/"])})}addIngredients(){this.shoppingListService.add(this.data.ingredients)}}return i.\u0275fac=function(t){return new(t||i)(r.Y36(_.F0),r.Y36(R),r.Y36(_.gz),r.Y36(ke._),r.Y36(ue.K),r.Y36(W.b))},i.\u0275cmp=r.Xpm({type:i,selectors:[["app-recipe-detail"]],decls:6,vars:2,consts:[[1,"container","mt-3","mb-3","background"],["routerLink","/",1,"btn","btn-link","ps-0","text-decoration-none"],[4,"ngIf","ngIfElse"],["noData",""],[1,"d-sm-flex","mb-3","align-items-start","gap-3"],[4,"ngIf"],[1,"mt-3","mt-sm-0","flex-grow-1"],[1,"d-flex","align-items-end"],[1,"me-auto"],[1,"pre-text"],[1,"mb-3"],[4,"ngFor","ngForOf"],[1,"btn","btn-outline-primary","btn-sm",3,"click"],[1,"img-responsive",3,"src","alt"],[1,"btn","btn-outline-danger","btn-sm","me-2","flex-shrink-0","btn-action",3,"click"],[1,"btn","btn-outline-secondary","btn-sm","flex-shrink-0","btn-action",3,"routerLink"],[1,"mb-3","form-check"],["type","checkbox",1,"form-check-input",3,"id"],[1,"form-check-label",3,"for"],[1,"text-center","mt-5"],["routerLink","/recipes"]],template:function(t,n){if(1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"button",1),r._uU(2," \u2190 Back "),r.qZA(),r.YNc(3,Be,22,8,"ng-container",2),r.YNc(4,Ye,5,0,"ng-template",null,3,r.W1O),r.qZA()),2&t){const s=r.MAs(5);r.xp6(3),r.Q6J("ngIf",n.data)("ngIfElse",s)}},directives:[_.rH,f.O5,f.sg,_.yS],pipes:[f.Ov],styles:[".pre-text[_ngcontent-%COMP%]{white-space:break-spaces}"]}),i})();var We=c(273);class ze{constructor(e,t,n,s,a,d){this.id=e,this.name=t,this.description=n,this.photoUrl=s,this.ingredients=a,this.directions=d}}function je(i,e){if(1&i){const t=r.EpF();r.ynx(0),r.TgZ(1,"div",19),r.TgZ(2,"div",20),r.TgZ(3,"input",21),r.NdJ("keydown",function(s){return r.CHM(t),r.oxw().onIngredientKeydown(s)})("paste",function(s){return r.CHM(t),r.oxw().onPaste(s)}),r.qZA(),r.TgZ(4,"div",5),r._uU(5,"This field is mandatory"),r.qZA(),r.qZA(),r.TgZ(6,"div"),r.TgZ(7,"button",22),r.NdJ("click",function(){const a=r.CHM(t).index;return r.oxw().remove(a)}),r.ALo(8,"async"),r.O4$(),r.TgZ(9,"svg",23),r._UZ(10,"path",24),r._UZ(11,"path",25),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.BQk()}if(2&i){const t=e.index,n=r.oxw();r.xp6(3),r.Q6J("formControlName",t),r.xp6(4),r.Q6J("disabled",r.lcZ(8,2,n.doing))}}let he=(()=>{class i{constructor(t,n){this.recipeService=t,this.activeRoute=n,this.recipe=new ze("","","","",[],""),this.fb=new h.qu,this.doing=new We.x,this.recipeId=this.activeRoute.snapshot.paramMap.get("id")||"",this.doing.next(!1)}ngOnInit(){this.subscription=this.activeRoute.data.subscribe(t=>{t.data&&(this.recipe=t.data),this.initForm()})}ngOnDestroy(){this.subscription.unsubscribe()}initForm(){this.form=this.fb.group({name:[this.recipe.name,h.kI.required],description:[this.recipe.description],directions:[this.recipe.directions,h.kI.required],photoUrl:[this.recipe.photoUrl],ingredients:this.fb.array(this.recipe.ingredients.map(t=>this.fb.control(t,h.kI.required)))})}submit(){this.doing.next(!0);const t=this.activeRoute.snapshot.paramMap.get("id");t?this.recipeService.update(t,this.form.value).then(()=>{this.doing.next(!1)}).catch(()=>{this.doing.next(!1)}):this.recipeService.addNewRecipe(this.form.value).then(()=>{this.doing.next(!1)}).catch(()=>{this.doing.next(!1)})}get ingredients(){return this.form.get("ingredients")}addIngredient(t=""){this.ingredients.push(this.fb.control(t,h.kI.required))}onIngredientKeydown(t){"Enter"===t.key&&(t.preventDefault(),this.addIngredient())}remove(t){this.ingredients.removeAt(t),this.recipe.ingredients.splice(t,1)}onPaste(t){var n;t.preventDefault();const a=((null===(n=t.clipboardData)||void 0===n?void 0:n.getData("text").trim().split("\n"))||[]).map((d,g)=>{const C=d.trim().replace(/^-\s\[[\s|x]\]\s/g,"");return 0!==g&&this.addIngredient(),C});this.ingredients.setValue(a)}}return i.\u0275fac=function(t){return new(t||i)(r.Y36(R),r.Y36(_.gz))},i.\u0275cmp=r.Xpm({type:i,selectors:[["app-recipe-edit"]],decls:43,vars:12,consts:[[1,"container","mt-3"],[1,"mb-3"],[3,"formGroup","ngSubmit"],["for","name",1,"form-label"],["type","text","id","name","name","name","formControlName","name",1,"form-control","form-control-sm"],[1,"invalid-feedback"],["for","photoUrl",1,"form-label"],["type","url","id","photoUrl","formControlName","photoUrl","name","photoUrl",1,"form-control","form-control-sm"],["for","description",1,"form-label"],["id","description","formControlName","description","name","description","rows","2",1,"form-control","form-control-sm"],["for","directions",1,"form-label"],["id","directions","formControlName","directions","name","directions","rows","5",1,"form-control","form-control-sm"],["for","ingredients",1,"form-label"],["formArrayName","ingredients"],[4,"ngFor","ngForOf"],["type","button",1,"btn","btn-default","btn-sm",3,"click"],[1,"mb-3","text-end"],["type","button",1,"btn","btn-default","btn-sm",3,"routerLink"],["type","submit",1,"btn","btn-primary","btn-sm",3,"disabled"],[1,"d-flex","gap-2","mb-2"],[1,"flex-grow-1"],["type","text","name","ingredientname","placeholder","Ingredient",1,"form-control","form-control-sm",3,"formControlName","keydown","paste"],[1,"btn","btn-outline-danger","btn-sm",3,"disabled","click"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","1em","height","1em","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-trash"],["d","M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"],["fill-rule","evenodd","d","M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"]],template:function(t,n){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"h2",1),r._uU(2),r.qZA(),r.TgZ(3,"form",2),r.NdJ("ngSubmit",function(){return n.submit()}),r.TgZ(4,"div",1),r.TgZ(5,"label",3),r._uU(6,"Name"),r.qZA(),r._UZ(7,"input",4),r.TgZ(8,"div",5),r._uU(9,"This field is mandatory"),r.qZA(),r.qZA(),r.TgZ(10,"div",1),r.TgZ(11,"label",6),r._uU(12,"Photo Url"),r.qZA(),r._UZ(13,"input",7),r.TgZ(14,"div",5),r._uU(15,"This field is mandatory"),r.qZA(),r.qZA(),r.TgZ(16,"div",1),r.TgZ(17,"label",8),r._uU(18,"Description"),r.qZA(),r._UZ(19,"textarea",9),r.TgZ(20,"div",5),r._uU(21,"This field is mandatory"),r.qZA(),r.qZA(),r.TgZ(22,"div",1),r.TgZ(23,"label",10),r._uU(24,"Directions"),r.qZA(),r._UZ(25,"textarea",11),r.TgZ(26,"div",5),r._uU(27,"This field is mandatory"),r.qZA(),r.qZA(),r.TgZ(28,"div",1),r.TgZ(29,"label",12),r._uU(30,"Ingredients"),r.qZA(),r.TgZ(31,"div",13),r.YNc(32,je,12,4,"ng-container",14),r.TgZ(33,"button",15),r.NdJ("click",function(){return n.addIngredient()}),r._uU(34," + Add another Ingredient "),r.qZA(),r.qZA(),r.qZA(),r.TgZ(35,"div",16),r.TgZ(36,"button",17),r._uU(37," Back "),r.qZA(),r.TgZ(38,"button",18),r.ALo(39,"async"),r._uU(40),r.ALo(41,"async"),r.ALo(42,"async"),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(2),r.hij("",n.recipeId?"Update":"Add"," Recipe"),r.xp6(1),r.Q6J("formGroup",n.form),r.xp6(29),r.Q6J("ngForOf",n.ingredients.controls),r.xp6(4),r.MGl("routerLink","/",n.recipeId,""),r.xp6(2),r.Q6J("disabled",!n.form.valid||r.lcZ(39,6,n.doing)),r.xp6(2),r.hij(" ",n.recipeId?r.lcZ(41,8,n.doing)?"Saving...":"Save":r.lcZ(42,10,n.doing)?"Submitting...":"Submit"," "))},directives:[h._Y,h.JL,h.sg,h.Fj,h.JJ,h.u,h.CE,f.sg,_.rH],pipes:[f.Ov],styles:[".container[_ngcontent-%COMP%]{max-width:500px}"]}),i})();const $e=function(i){return{backgroundImage:i}};function Ve(i,e){if(1&i&&r._UZ(0,"div",7),2&i){const t=r.oxw();r.Q6J("ngStyle",r.VKq(1,$e,"url(' "+t.data.photoUrl+"')"))}}function He(i,e){if(1&i&&r._UZ(0,"img",8),2&i){const t=r.oxw();r.s9C("alt",t.data.name)}}let Ke=(()=>{class i{constructor(t){this.recipeService=t}ngOnInit(){}onClick(t){t.preventDefault(),this.recipeService.setActiveRecipe(this.data)}}return i.\u0275fac=function(t){return new(t||i)(r.Y36(R))},i.\u0275cmp=r.Xpm({type:i,selectors:[["app-recipe-item"]],inputs:{data:"data"},decls:11,vars:5,consts:[[1,"card"],["class","img-square",3,"ngStyle",4,"ngIf","ngIfElse"],["noImage",""],[1,"card-body"],[1,"card-title"],[1,"card-text","text-truncate"],[1,"stretched-link",3,"routerLink"],[1,"img-square",3,"ngStyle"],["src","assets/image-placeholder.jpeg",1,"card-img-top",3,"alt"]],template:function(t,n){if(1&t&&(r.TgZ(0,"div",0),r.YNc(1,Ve,1,3,"div",1),r.YNc(2,He,1,1,"ng-template",null,2,r.W1O),r.TgZ(4,"div",3),r.TgZ(5,"h5",4),r._uU(6),r.qZA(),r.TgZ(7,"p",5),r._uU(8),r.qZA(),r.TgZ(9,"a",6),r._uU(10,"View details"),r.qZA(),r.qZA(),r.qZA()),2&t){const s=r.MAs(3);r.xp6(1),r.Q6J("ngIf",n.data.photoUrl)("ngIfElse",s),r.xp6(5),r.Oqu(n.data.name),r.xp6(2),r.Oqu(n.data.description),r.xp6(1),r.MGl("routerLink","/",n.data.id,"")}},directives:[f.O5,_.yS,f.PC],styles:[".card[_ngcontent-%COMP%]{transition:all .3s ease}.card[_ngcontent-%COMP%]:hover{box-shadow:0 1rem 3rem #0000002e}.img-square[_ngcontent-%COMP%]{padding-bottom:100%;background-size:cover;background-repeat:no-repeat}"]}),i})();function Xe(i,e){if(1&i&&(r.TgZ(0,"div",2),r._UZ(1,"app-recipe-item",3),r.qZA()),2&i){const t=e.$implicit;r.xp6(1),r.Q6J("data",t)}}let et=(()=>{class i{constructor(t,n,s){this.loadingService=t,this.activeRoute=n,this.recipesService=s,this.recipes=[]}ngOnInit(){this.loadingService.toggle(!0),this.dataSub=this.recipesService.getRecipes().subscribe(t=>{this.loadingService.toggle(!1),this.recipes=t})}ngOnDestroy(){this.dataSub.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(r.Y36(W.b),r.Y36(_.gz),r.Y36(R))},i.\u0275cmp=r.Xpm({type:i,selectors:[["app-recipe-list"]],decls:2,vars:1,consts:[[1,"row"],["class","col-6 col-md-4 col-lg-3 mb-3",4,"ngFor","ngForOf"],[1,"col-6","col-md-4","col-lg-3","mb-3"],[3,"data"]],template:function(t,n){1&t&&(r.TgZ(0,"div",0),r.YNc(1,Xe,2,1,"div",1),r.qZA()),2&t&&(r.xp6(1),r.Q6J("ngForOf",n.recipes))},directives:[f.sg,Ke],styles:[""]}),i})();function tt(i,e){1&i&&(r.TgZ(0,"div",2),r.TgZ(1,"button",3),r._uU(2," + New Recipe "),r.qZA(),r.qZA())}const rt=[{path:"",component:(()=>{class i{constructor(t){this.userService=t}ngOnInit(){this.isLoggedIn=this.userService.isAuthenticated()}}return i.\u0275fac=function(t){return new(t||i)(r.Y36(ue.K))},i.\u0275cmp=r.Xpm({type:i,selectors:[["app-recipes"]],decls:4,vars:3,consts:[[1,"container","pt-3"],["class","text-end",4,"ngIf"],[1,"text-end"],["routerLink","/add",1,"btn","btn-primary","mb-3","btn-sm"]],template:function(t,n){1&t&&(r.TgZ(0,"div",0),r.YNc(1,tt,3,0,"div",1),r.ALo(2,"async"),r._UZ(3,"app-recipe-list"),r.qZA()),2&t&&(r.xp6(1),r.Q6J("ngIf",r.lcZ(2,1,n.isLoggedIn)))},directives:[f.O5,et,_.rH],pipes:[f.Ov],styles:[""]}),i})()},{path:"add",component:he,pathMatch:"add"},{path:":id",resolve:{data:Me},children:[{path:"",component:Qe},{path:"edit",component:he}]}];let it=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[[_.Bz.forChild(rt)],_.Bz]}),i})(),nt=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({providers:[],imports:[[f.ez,h.UX,it]]}),i})()}}]);