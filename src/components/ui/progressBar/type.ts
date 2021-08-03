export interface PrimitiveType{
    name:string;
    value: number;
}

export interface ComplexType{
    
}

export interface EventType{

}


export type Props = PrimitiveType & ComplexType & EventType;

export default Props;