import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'treenodeui',
  templateUrl: './treenodeui.component.html',
  styleUrls: ['./treenodeui.component.css']
})
export class TreenodeuiComponent implements OnInit {


  @Input() node:TreeNode;
  tabcounter:any=0;
  textValue:any;

  constructor() { }

  ngOnInit() {
    console.log("--------------------------");
    console.log(this.node)
  }

  addtab(){

    // if(node )
    // let chilt= []; 
    // for(let i=1;i<4;i++){
    //   chilt.push({
    //     data: this.tabcounter +" / "+ i
    //   });


    // }   
    debugger 
    if(this.node){
      if(!this.node.children){
        this.node.children=[];
      }
    
      let xyz :TreeNode ={
        data: this.tabcounter++,testdata:[{ inputOne1:'',input2:''}]
      };
    this.node.children.push(xyz);
    console.log(this.node)
  }
}

onLinkClick($event){
  // debugger

}

}

// interface singledata {

//   name: string;
//   description: string;
//   branch: singledata[];
// }

interface TreeNode{
  // label: string;
  data: any;
  inputdata ?:any;
  testdata ?:any;
  children ?: TreeNode[];
}