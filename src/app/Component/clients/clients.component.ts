import { Component } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {



//   Task is:-
// 1 - Take data from the any mock service or create duplicate name json.
// 2 - Have the distinct name in table
// 3 - Table will have 2 columns, one is for the name and another for the number of times it was duplicated
// 4 - mark the background of that row red if the duplicates are more than 0 and less 3
// 5 - mark row yellow if more than 2 and less than 10
// 6 -Mark green if more than 10 times.

tableData:any
constructor(private users : UsersService){}

ngOnInit(){
  this.tableData = this.users.Data
  this.getFun1()
}


NameData:any =[]

getFun1(){
  let newObj:any ={}
  newObj.count = 0
  console.log("service data",this.users.Data)

  this.users.Data.forEach((i:any) => {

    let data = this.NameData.find((x:any) => x.Name == i.Name )

    if(data){
    console.log("data present",data)
          for(let val of this.NameData){
            if(val.Name == data.Name){
              val.count = val.count+1
            }
          }
    }
    else{
      newObj = i
      newObj.count = 1
      console.log(newObj)
      this.NameData.push(newObj)
    }
  });

  console.log(this.NameData)
}

}
