<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ProductController extends Controller{

    public function postProduct(Request $request){




        $product = new Product();

        $expl = explode(',',$request->image);
        $dcode = base64_decode($expl[1]);

        if (str_contains($expl[0],'png'))
            $extension = 'png';

        else
            $extension = 'jpg';

        $current_time = Carbon::now()->timestamp;
        $filename = $current_time.'.'.$extension;

        $filepath = public_path().'/'.$filename;

        file_put_contents($filepath,$dcode);

        $product->name = $request->input('name');
        $product->quantity = $request->input('quantity');
        $product->image = $filename;
        $product->price = $request->input('price');
        $product->save();

        return response()->json(['product'=>$product],201);

    }

    public function getProducts(){

        $allproducts = Product::all();
        $response = [

            'allproducts'=>$allproducts
        ];

        return response()->json($response,200);

    }

    public function getProduct($id){

        $item= Product::find($id);
        $response = [

            'item'=>$item
        ];

        return response()->json($response,200);

    }

    public function putProduct(Request $request,$id){

        $item= Product::find($id);
        if (!$item){
            return response()->json(['message'=>"Not found"],404);
        }

        $item->name = $request->input('name');
        $item->quantity = $request->input('quantity');
        $item->price = $request->input('price');
        $item->save();
        return response()->json(['task'=>$item],200);
    }

    public function deleteItem($id){
        $item = Product::find($id);
        if (!$item){
            return response()->json(['message'=>"Not found"],404);
        }
        $item->delete();
        return response()->json(['message'=>"Item deleted"],201);
    }


}
