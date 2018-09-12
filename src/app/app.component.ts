import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App!';
 
   tabcounter:any='1';
   textValue:any;


  tabs: any[]=[];

  
  constructor(){
    this.addtab(); 

  }

  createNew(){
    

    this.tabs.push(     
      {
        data:this.tabcounter++,testdata:[{ inputOne1:'',input2:''}], children:[{data:1 ,children:[{data:1}]}]
      }
     );
  }


 addDemo(){

      



 }


  addtab(){


    this.tabs.push(     
     {
       data:this.tabcounter++,testdata:[{ inputOne1:'',input2:''}],children:[{data:1}]
     }
    )
    
    // this.tabs.push(     
    //   {
    //     data:this.tabcounter++,
    //     children:[{data:1},{data:2}]
    //   }
    //  )

    //  this.tabs.push(     
    //   {
    //     data:this.tabcounter++,
    //     children:[{data:7},{data:8},{data:9}]
    //   }
    //  )
  console.log(this.tabs)  ; 
  }
  




  

}

