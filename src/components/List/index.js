import { useRef, useState } from "react";
import action from "../../asset/icon/action.svg";

const List = () => {
    const actionRef = useRef();
    const [isShow, setIsShow] = useState(true);

    const onClick = () => {
        setIsShow((prev) => !prev);
    };

    return (
        <li className="content-list radius-full">
            <label class="container-checkbox">
                Buy food for dinner
                <input type="checkbox" />
                <span class="checkmark"></span>
            </label>
            <div className="relative">
                <img ref={actionRef} src={action} className="action" alt="logo" onClick={onClick} />
                {isShow && (
                    <ul className="absolute right-0 content-action">
                        <li>Edit</li>
                        <li>Delete</li>
                    </ul>
                )}
            </div>
        </li>
    );
};

export default List;
