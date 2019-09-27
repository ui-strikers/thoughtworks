var TW = (function(TW){

    TW.seno.senoLocal = {}

    //create select option drowdown in @param::no param
    TW.seno.senoLocal.createOption = ()=>{
        let selectbox = TW.seno.dom.find('.select-box-first')[0];
        TW.seno.data.forEach((ele,idx)=>{
           let option = TW.seno.dom.create('option');
           let key=Object.keys(ele)[0];
           let txt = TW.seno.dom.createText(option,key);
           TW.seno.dom.append(option,txt);
           option.setAttribute('value',key);
           TW.seno.dom.append(selectbox,option);
        });
    }
		
    //create select region from dropdownand show on input field@param::no param
    TW.seno.senoLocal.selectRegion = ()=>{
        var selectbox = TW.seno.dom.find('.select-box-first')[0];
        var selectbox2 = TW.seno.dom.find('.select-box-second')[0];
        selectbox.addEventListener('change',()=>{
            let idx = selectbox.options[selectbox.selectedIndex].index;
            let key = Object.keys(TW.seno.data[idx])[0];
           
            TW.seno.data[idx][key].forEach((el)=>{
                let option = TW.seno.dom.create('option');
                let txt = TW.seno.dom.createText(option,el.name);
                TW.seno.dom.append(option,txt);
                option.setAttribute('value',el.name);
                TW.seno.dom.append(selectbox2,option);
            });
           
            // let secondSelectBox = TW.seno.dom.find('.select-box-first')[0];
            // let currentData = TW.seno.data[idx];
            // inputfield.setAttribute('value' , currentData[key][0].name);
          
        })
    }

    //generate row template of row @param::name,discription,pincode to enter in 3 coloums
    TW.seno.senoLocal.generateRowTemplate = (name,description,pincode)=>{
        return rowtemplate = `<tr>
                                <td><input type="checkbox"></td>
                                <td>${name}</td>
                                <td>${description}</td>
                                <td>${pincode}</td>
                            </tr>`
        
    }

    //generate Table rows of includedsection @param::no param, calls generateRowTemplate
    TW.seno.senoLocal.createIncludedTable = ()=>{
        includeTable = TW.seno.dom.find('.seno-avilable tbody')[0];
        console.log(includeTable)
        TW.seno.data[0].city.forEach((ele,idx)=>{
            let row = TW.seno.senoLocal.generateRowTemplate(ele.name,ele.discription,ele.pinCode)
            includeTable.insertAdjacentHTML("beforeend",row)
        })
    }

    //swap selected rows from included section to excluded @param::no param, calls generateRowTemplate
    TW.seno.senoLocal.swapIncludedSeno = ()=>{
        let nxtBtn = TW.seno.dom.find('button.btn-next')[0];
        excludedTable = TW.seno.dom.find('.seno-excluded tbody')[0];
        nxtBtn.addEventListener('click',()=>{
            var checkboxes = TW.seno.dom.find('.seno-avilable input');
            var checkedindex = [];
            checkboxes.forEach((ele,i)=>{
                if(ele.checked){
                    checkedindex.push(i);
                }
            })
            excludedTable.innerHTML = '';
            checkedindex.forEach((ele,idx)=>{
                let current = TW.seno.data[0].city[ele];
                let row = TW.seno.senoLocal.generateRowTemplate(current.name,current.discription,current.pinCode);
               
                excludedTable.insertAdjacentHTML("beforeend",row);
            })
        })
    }

    return TW;
})(TW || {});