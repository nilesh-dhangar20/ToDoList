import React, { useState, useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

// get data from local storage afler saving in local storage;
const getData = () => {
    let List = localStorage.getItem('list');
    console.log(List);
    if (List) {
        return JSON.parse(localStorage.getItem('list'))
    }
    else {
        return [];
    }
}




const Todo = () => {

    //first state to save input changes on input button
    // to show list downside
    // to change button add and edit in input filed
    // to save edit items on the same list not creating another one



    const [input, setinput] = useState("");
    const [array, setarray] = useState(getData());  
    const [togglebtn, settogglebtn] = useState(true);
    const [EditItems, setEditItems] = useState(null);

     
    // input change function which user type are setting in setinput

    const inputEvent = (event) => {
        setinput(event.target.value);
    }





  //whenvever we click on add button set list call 
  // if there is nothing in the list items or user does write any thing then it will alert
  // else if  ,if there is editing of any list items then it will run
  // else if normal add click items added




    const setList = () => {
        if (!input) {
            alert("please write items first");
        }
        else if (input && !togglebtn) {
            setarray(
                array.map((elem) => {
                    if (elem.id === EditItems) {
                        return { ...elem, name: input };
                    }
                    return elem;
                })
            )
            setinput("");
            settogglebtn(true);
        }
        else {
            const allinputdata = { id: new Date().getTime().toString(), name: input };
            setarray([...array, allinputdata]);

            setinput("");
        }

    }


    // whenever we click on delete icons of list then it delete

    const deleteOneItem = (id) => {
        const updatedArray = array.filter((ele) => {
            return id !== ele.id;
        });
        setarray(updatedArray);
    }


    // whenever we click on remove all button it will delete all items

    const RemoveAll = () => {
        setarray([]);
        settogglebtn(true);
    };



    //we are storing list items on localstroge even if we refrese it will not disaable


    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(array));
    }, [array]);


//when we are edditing an items find item by id 

    const editItem = (id) => {
        let editItemget = array.find((elem) => {
            return elem.id === id;
        });

        settogglebtn(false);
        setinput(editItemget.name);
        setEditItems(id);
    }



    return (
        <>
            <div className="container mt-5 text-center">
                <div className="row">
                    <div className="col-md-10 input_items">
                        <h1 className="text-white">List your Items Here</h1>
                        <div className=" col input_items_div d-flex align-items-center justify-content-center">
                            <input type="text" className="todo_input mt-4 pt-2 pb-2 " placeholder="  add your item" value={input} onChange={inputEvent} />
                            {
                                togglebtn ? <i className="fas fa-plus add-btn text-black add_icons pt-4" title="add item" onClick={ setList}></i> : <i className="fas fa-edit add-btn me-1  add_icons text-black pt-4" title="edit items" onClick={setList}></i>
                            }
                            {/* <i className="fas fa-plus add-btn text-white add_icons" title="add item" onClick={setList}></i> */}

                        </div>

                    </div>
                </div>
                <div className="row ">

                    {
                        array.map((ele, index) => {
                            return (
                                <>
                                    <div className="col col-md-10 show_items_list">
                                        <div className=" col-md-4 offset-md-4 showlist d-flex align-items-center justify-content-center mt-3">
                                            <h3 className=" me-3">{ele.name}</h3>
                                            <i className="fas fa-edit add-btn me-2 edit_icon" title="edit items"  
                                            onClick={()=>editItem(ele.id)}
                                           > </i>

                                           <i className="fas fa-trash-alt add-btn delete_icon " title="delete item" onClick={() => deleteOneItem(ele.id)}></i>

                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }


                </div>
                <div className="row">
                    <div className="col col-md-10">
                        <button className="btn mt-3  todo_button" onClick={RemoveAll}>clear All</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Todo
//  onClick={editItem(ele.id)}