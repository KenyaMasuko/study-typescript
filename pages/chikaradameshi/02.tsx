import React from "react";

type User = {
	name: string;
	age: number;
	premiumUser: boolean;
};

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

const arr1 = data.split("\n");

// let users: User[] = [];
// for (const arr of arr1) {
// 	if (arr === "") {
// 		continue;
// 	}

// 	const [name, ageStr, premiumNumberStr] = arr.split(",");
// 	const age = Number(ageStr);
// 	const premiumUser = premiumNumberStr === "1";

// 	users.push({
// 		name,
// 		age,
// 		premiumUser,
// 	});
// }

// 別解
const users: User[] = arr1
	.filter((line) => line !== "")
	.map((user) => {
		const [name, ageStr, premiumStr] = user.split(",");
		return {
			name,
			age: Number(ageStr),
			premiumUser: premiumStr === "1",
		};
	});

for (const user of users) {
	if (user.premiumUser) {
		console.log(`${user.name}(${user.age})はプレミアムユーザーです`);
	} else {
		console.log(
			`${user.name}(${user.age})はプレミアムユーザーではありません。`
		);
	}
}

const _02 = () => {
	return <div>02</div>;
};

export default _02;
