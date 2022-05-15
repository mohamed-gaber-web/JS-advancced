// ? promise 
// 1- Emit single value
// 2- Are not lazy: execute immediately after creation 
// 3- Are not cancellable
// 4- Don't provide any operations 
// 5- Error: push error to the child promises
// 6- return : succes - error 
// 7- resolve()

// ? observable
// 1- Emit multiple values
// 2- Are lazy: execute when subscribe by used subscribe() method
// 3- cancellable: used unsubscribe()  
// 4- Provide more opertators: map - filter - reduce - retry
// 5- Error : deliver error to the subscriber
// 6- return : succes - error - complete
// 7- next

create - execute - cancel