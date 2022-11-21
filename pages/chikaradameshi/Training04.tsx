import { User } from "../../components";

const Training04 = () => {
	const uhyo = new User("uhyo", 26);
	console.log(uhyo);

	const createUser = (name: string, age: number) => {
		return (message: string) => {
			return `${name} (${age}) [${message}]`;
		};
	};

	return <div>Training04</div>;
};

export default Training04;
