import { ObjectId } from "bson";

export class Entity {

  _id: ObjectId;
  date_created: Date;
  date_updated: Date;

	constructor(args?:any){
		this.fromJSON(args);
	}

	toJSON() {
		const jsonObj = Object.assign({}, this);
		const proto = Object.getPrototypeOf(this);
		for (const key of Object.getOwnPropertyNames(proto)) {
			const desc = Object.getOwnPropertyDescriptor(proto, key);
			const hasGetter = desc && typeof desc.get === 'function';
			if (hasGetter) {
				jsonObj[key] = this[key];
			}
		}
		for (let k in jsonObj) {
			if (k && k[0] === '_') {
				delete jsonObj[k];
			}
		}
		return jsonObj;
	}
	fromJSON(args: any){
		if(typeof args !=='undefined'){
			Object.assign(this,args)
		}
	}

  get id() {
    if(this._id) return this._id.toHexString();
  }
}