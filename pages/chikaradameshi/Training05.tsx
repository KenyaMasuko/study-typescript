import { User } from "../../components";

type Option<T> =
	| {
			type: "some";
			value: T;
	  }
	| {
			type: "none";
	  };

function showNumberIfExists(obj: Option<number>) {
	if (isSome(obj)) {
		console.log(obj.value);
	}
}

function isSome<T>(obj: Option<T>): obj is { type: "some"; value: T } {
	return obj.type === "some";
}

function mapOption<T, U>(obj: Option<T>, callback: (param: T) => U) {
	if (isSome(obj)) {
		return { type: "some", value: callback(obj.value) };
	}
	return { type: "none" };
}

function double(obj: Option<number>) {
	return mapOption(obj, (x) => x * 2);
}

const Training05 = () => {
	const four: Option<number> = { type: "some", value: 4 };
	const nothing: Option<number> = { type: "none" };

	console.log(double(four));
	console.log(double(nothing));

	return <div>Training05</div>;
};

export default Training05;
