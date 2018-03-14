// DO WHATEVER YOU WANT HERE
const createEnumerableProperty = (property) => {
	return this;
};
	
const createNotEnumerableProperty = (property) => {

	Object.defineProperty(Object.prototype, property, {
		enumerable: false,
		value: 'value'
	});

	return property;
};

const createProtoMagicObject = () => {

    let magic = () => {};
    magic.prototype = magic.__proto__;
    return magic;
};

const incrementor = () => {

	result++;
	return incrementor;
};

let result = 0;
incrementor.valueOf = () => result;

const asyncIncrementor = async () => {
	return await asyncResult++;
};

let asyncResult = 1;

const createIncrementer = () => {

	function* incrementor() {
		let index = 1;
		while (index <= 10) {
			yield index;
			index++;
		}
	}

	return incrementor();
};


// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {

	const timeout = n => { 
		return new Promise( res => {
			setTimeout( () => {
				return res(param);
			}, n);
		});
	};
	
	return timeout(1000);
};

const getDeepPropertiesCount = (object) => {

	let result = 0;
	const count = object => {
		for (let property in object) {
			if ( typeof(object[property]) === 'object' ) {
				count(object[property]);
			}
			result++;
		}
		return result;
	}

	return count(object);
};

const createSerializedObject = () => {

	let obj = null;
	return obj;
};

// const toBuffer = () => {};

const sortByProto = (array) => {
	
	return array.filter( elem => elem.__proto__).sort( (a, b) => {
		return a - b;
	})
};


exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;