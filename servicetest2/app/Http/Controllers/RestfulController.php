<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\info;
class RestfulController extends Controller
{     
    public function getinfo(Request $request)
    {
        if(isset($request->id)){
            $getbyid = info::find($request->id);
            return response()->json(['getbyid' => $getbyid],201); 
        }
        $getall = info::all();
        return response()->json(['getall' => $getall],200); 
    }

    public function createinfo(Request $request)
    {
        $new = new info;
        $new->fullname = $request->input('fullname');
        $new->email = $request->input('email');
        $new->detail = $request->input('detail');
        $new->save();

        return response()->json(['newitem'=>$new],201);
    }

    public function updateinfo(Request $request,$id)
    {
        $update = info::find($id);
        if(!$update){
            return response()->json(['error'=>'not found'],404);
        }
        $update->fullname = $request->input('fullname');
        $update->email = $request->input('email');
        $update->detail = $request->input('detail');
        $update->save();

        return response()->json(['newitem'=>$update],201);
    }

    public function deleteinfo($id)
    {
        $delete = info::find($id);
        $delete->delete();
        return response()->json(['message'=>'info delete'],200);
    }
}
