//UI Elements
let goldOp = document.getElementById('goldOpening'),
    goldInf = document.getElementById('goldInflow'),
    goldOut = document.getElementById('goldOutflow'),
    goldClos = document.getElementById('goldClosing'),
    goldAct = document.getElementById('goldActual'),
    silverOp = document.getElementById('silverOpening'),
    silverInf = document.getElementById('silverInflow'),
    silverOut = document.getElementById('silverOutflow'),
    silverClos = document.getElementById('silverClosing'),
    silverAct = document.getElementById('silverActual'),
    steelOp = document.getElementById('steelOpening'),
    steelInf = document.getElementById('steelInflow'),
    steelOut = document.getElementById('steelOutflow'),
    steelClos = document.getElementById('steelClosing'),
    steelAct = document.getElementById('steelActual'),
    mercuryOp = document.getElementById('mercuryOpening'),
    mercuryInf = document.getElementById('mercuryInflow'),
    mercuryOut = document.getElementById('mercuryOutflow'),
    mercuryClos = document.getElementById('mercuryClosing'),
    mercuryAct = document.getElementById('mercuryActual'),
    copperOp = document.getElementById('copperOpening'),
    copperInf = document.getElementById('copperInflow'),
    copperOut = document.getElementById('copperOutflow'),
    copperClos = document.getElementById('copperClosing'),
    copperAct = document.getElementById('copperActual');

    //Form Elements
    //Input Elements
    let itemsName = document.getElementById('item-name'),
        inFlow = document.getElementById('inflow'),
        open = document.getElementById('opening'),
        outFlow = document.getElementById('outflow'),
        closed = document.getElementById('closing'),
        act = document.getElementById('actual'),
        itemAdd = document.getElementById('add-item');

    //Items
    let itemGold = document.getElementById('gold');

    //Submit Elements
    let submitItem = document.getElementById('itemSubmit'),
        submitOpening = document.getElementById('openingSubmit'),
        submitInflow = document.getElementById('inflowSubmit'),
        submitOutflow = document.getElementById('outflowSubmit'),
        submitClosing = document.getElementById('closingSubmit'),
        submitActual = document.getElementById('actualSubmit'),
        submitAdd = document.getElementById('addSubmit');

    //Add Event Listeners For the Submit Buttons
    //Opening
    submitOpening.addEventListener('click', enter);
    submitInflow.addEventListener('click', inflows);
    submitOutflow.addEventListener('click', Outflows);
    
    
    function enter(e){
        if(itemsName.value == 'Gold'){
            goldOp.textContent = open.value;
        }else if(itemsName.value == 'Silver'){
            silverOp.textContent = open.value;
        }else if(itemsName.value == 'Steel'){
            steelOp.textContent = open.value;
        }else if(itemsName.value == 'Mercury'){
            mercuryOp.textContent = open.value;
        }else if(itemsName.value == 'Copper'){
            copperOp.textContent = open.value;
        }else if(open.value == "" || itemsName.value == ''){
            errorMessage.appendChild(document.createTextNode(errorMes()));
        }
        setTimeout(clearError,3000)
        
        console.log('entering');
        e.preventDefault();
    }
    function inflows(e){
        if(itemsName.value == 'Gold'){
            goldInf.textContent = inFlow.value;
            storeData(inFlow.value);
        }else if(itemsName.value == 'Silver'){
            silverInf.textContent = inFlow.value;
        }else if(itemsName.value == 'Steel'){
            steelInf.textContent = inFlow.value;
        }else if(itemsName.value == 'Mercury'){
            mercuryInf.textContent = inFlow.value;
        }else if(itemsName.value == 'Copper'){
            copperInf.textContent = inFlow.value;
        }else if(inFlow.value == "" || itemsName.value == ''){
            errorMessage.appendChild(document.createTextNode(errorMes()))
        } 
        
        
        setTimeout(clearError,3000)

        console.log('entering');
        e.preventDefault();
    }
      


    function Outflows(e){
        if(itemsName.value == 'Gold'){
            goldOut.textContent = outFlow.value;
        if(goldOp.textContent !== '' && goldInf.textContent !== '')
            goldClos.textContent = parseInt(goldOp.textContent) + parseInt(goldInf.textContent) - parseInt(outFlow.value); 
        }else if(itemsName.value == 'Silver'){
            silverOut.textContent = outFlow.value;
            if(silverOp.textContent !== '' && silverInf.textContent !== '')
            silverClos.textContent = parseInt(silverOp.textContent) + parseInt(silverInf.textContent) - parseInt(outFlow.value);
        }else if(itemsName.value == 'Steel'){
            steelOut.textContent = outFlow.value;
            if(steelOp.textContent !== '' && steelInf.textContent !== '')
            steelClos.textContent = parseInt(steelOp.textContent) + parseInt(steelInf.textContent) - parseInt(outFlow.value);
        }else if(itemsName.value == 'Mercury'){
            mercuryOut.textContent = outFlow.value;
            if(mercuryOp.textContent !== '' && mercuryInf.textContent !== '')
            mercuryClos.textContent = parseInt(mercuryOp.textContent) + parseInt(mercuryInf.textContent) - parseInt(outFlow.value);
        }else if(itemsName.value == 'Copper'){
            copperOut.textContent = outFlow.value;
             if(copperOp.textContent !== '' && copperInf.textContent !== '')
            copperClos.textContent = parseInt(copperOp.textContent) + parseInt(copperInf.textContent) - parseInt(outFlow.value);
        }else if(outFlow.value == "" || itemsName.value == ''){
           
    
          errorMessage.appendChild(document.createTextNode(errorMes()));
        
          //Set time out for the error Notification to disappear automatically
          setTimeout(clearError,3000)
         }
         //storeValuesToLocalStorage(outFlow.value);
         
         
         
         
        e.preventDefault();
    }
    
    let errorMessage = document.getElementById('errorMessage');

    function errorMes(){
        return "please enter a a valid figure"
        
    }
    
    function clearError(){
        document.getElementById('errorMessage').remove();
    }
   
    function storeData(outPut){
        let outPuts;
        if(localStorage.getItem('outPuts') === null){
            outPuts = [];
        }else{
            outPuts = JSON.parse(localStorage.getItem('outPuts'))
        }outPuts.push(outPut);
        localStorage.setItem('outPuts',JSON.stringify(outPuts));
        
    }
    //localStorage.setItem('name','Peter');
