import type { NextPage } from "next";
import { ChangeEventHandler, FC, MouseEventHandler, useState } from "react";

type Todo = {
	id: number;
	text: string;
	done: boolean;
};

const Home: NextPage = () => {
	const [text, setText] = useState("");
	const [todos, setTodos] = useState<Todo[]>([]);

	//タスクをinputから受け取る処理
	const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
		setText(e.target.value);
	};

	//タスクを追加する処理
	const handleAdd: MouseEventHandler<HTMLButtonElement> = (e) => {
		setTodos(() => {
			return [...todos, { id: Math.random(), text, done: false }];
		});
		setText("");
	};

	//チェックボックスのトグル処理
	const handleCheck: ChangeEventHandler<HTMLInputElement> = (e) => {
		setTodos((prevTodos) => {
			return prevTodos.map((todo) => {
				if (todo.id === Number(e.target.value)) {
					return { ...todo, done: !todo.done };
				}
				return todo;
			});
		});
	};

	return (
		<div className="w-96 mx-auto p-20">
			<h1 className="text-xl font-bold">todo</h1>
			<div className="flex gap-x-2">
				<input
					type="text"
					className="border border-black"
					value={text}
					onChange={handleInput}
				/>
				<button
					className="border border-black shrink-0 px-2"
					onClick={handleAdd}
				>
					追加
				</button>
			</div>
			<ul className="mt-4 space-y-2">
				{todos.map((todo) => {
					return (
						<li key={todo.id}>
							<ListItem todo={todo} handleCheck={handleCheck} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

type ListItemProps = {
	todo: Todo;
	handleCheck: ChangeEventHandler<HTMLInputElement>;
};

const ListItem: FC<ListItemProps> = ({ todo, handleCheck }) => {
	return (
		<label className="flex items-center gap-x-2">
			<input
				value={todo.id}
				type="checkbox"
				checked={todo.done}
				onChange={handleCheck}
			/>
			<span className="text-sm">{todo.text}</span>
		</label>
	);
};

export default Home;
