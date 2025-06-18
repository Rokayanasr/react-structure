export type locationRequest={
    name:string,
}
export type locationResponse={
  data:{
    data:{
        id:number,
        name:string,
      },
      meta:{
        current_page:number,
        last_page:number,
        from:number,
      }
  }
  message:string,
  status:number,
  success:boolean,
  
  per_page:number,
  to:number,
  total:number,
}
        
export type locationData={
  id:number,
  name:string,
}

export type locationInitialState={
  locations:locationData[],
  current_page:number,
  per_page:number,
  last_page:number,
}
