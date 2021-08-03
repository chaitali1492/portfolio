export interface PrimitiveType{
    title:string;
    session:string;
    result : string;
}

export interface ComplexType{
    
}

export interface EventType{

}


export type Props = PrimitiveType & ComplexType & EventType;

export default Props;