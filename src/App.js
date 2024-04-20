import Todolist from "./components/Todolist";
import Textfield from '@atlaskit/textfield'
import Button from '@atlaskit/button'
import { useState } from "react";
function App() {
    //state: dữ liệu nội tại , props: data đc truyền từ bên ngoài vào
    const [todoList, setTodoList] = useState([]); //array
    const [textInput, setTextInput] = useState(""); //array
    const onTextInputChange = (e) => {
        setTextInput(e.target.value);
    };
    return (
        <div>
        <h3>Danh sach can lam</h3>
        <Textfield name="add-todo" placeholder="Thêm việc cần làm ..." elemAfterInput ={
                <Button isDisabled={true} appearance='primary' onClick = { }>
                Thêm
                </Button>
            
        }
        css ={{padding: "2px 4px 2px"}}
        value={textInput}
        onChange={onTextInputChange}
        ></Textfield>
        <Todolist/>
        </div>
    );
}

export default App;