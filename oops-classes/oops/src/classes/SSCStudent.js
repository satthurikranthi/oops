class SSCStudent{

    constructor(colors,favcolors,round1,round2,round3){

        console.log("Inside SSCStudent constructor.");
        console.log(colors,favcolors,round1,round2,round3);


        this.colors = colors;
       this.favcolors =favcolors;
       this.round1 = round1;
       this.round2 = round2;
       this.round3 = round3;
    }

    calculateResult = ()=>{
        let passMarks = 35;



        if(this.round1 >= passMarks&&
            this.round2 >= passMarks&&
            this.round3 >= passMarks

        ){
            console.log(`${this.colors}${this.favcolors}
                passed in paiting program`);
        }else{
            console.log(`${this.colors}${this.favcolors}
            failled in paiting program` )
        }
    }

}

export default SSCStudent;