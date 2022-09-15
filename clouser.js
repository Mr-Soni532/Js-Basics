// every single varible decalred inside the parent scope is accessible by it's children 
//! But any variable declared inside a child scope cannot be accessed by the parent 

{      // parent //!Dead
    let a = 'a'
    {  // child - parent //!Dead
        let b = 'b'
        { // grandChild - child- parent //!Dead
            let c = 'c'
            { // great grandChild - grandchild - child - parent //! Dead
                let d = 'd'
                { //  great great grandChild - great grandchild - grandchild  - child - parent //! Dead
                    let e = 'e'
                    { //  great great great grandChild - great great granchild - great grandchild - grandchild - child - Parent
                        let f = 'f'
                    }
                }
            }
        }
    }
}