import {Router} from 'express';
import {Todo} from '../models/todo';

type RequestBody={id:string,text:string};
let todos:Todo[]=[];
const router=Router();

router.get('/',(req,res,next)=>{
res.status(200).json({todos:todos});
});

router.post('/todo',(req,res,next)=>{
    const body=req.body as RequestBody;
    const newTodo:Todo={
        id:new Date().toISOString(),
        text: body.text
      };
      todos.push(newTodo);
    });
router.post('/delete',(req,res,next)=>{
    const body=req.body as RequestBody;    
    const id=body.id;
        const todoIndex = todos.findIndex((todoItem) => todoItem.id === id);
        if(todoIndex>=0)
        {
            todos[todoIndex]={id:todos[todoIndex].id,text:req.body.text};
            return res.status(200).json({message:"Updated todo"});
        }
        res.status(404).json({message:"Not Found"});
    });

router.post('/delete',(req,res,next)=>{
    const body=req.body as RequestBody;    
    const id=body.id;
        const todoIndex = todos.findIndex((todoItem) => todoItem.id === id);
        if(todoIndex>=0)
        {
        todos = todos.filter(item => item.id !== id)
        return res.status(200).json({message:"Deleted todo"});
        }
        res.status(404).json({message:"Not Found"});

    });

    

export default router;