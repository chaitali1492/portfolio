
export interface NavItem{
    name: string,
    href?: string,
    scrollTo:string
}

export interface PrimitiveType{
    logoText:string
}

export interface ComplexType{
    items:NavItem[]
}

export interface EventType{

}


export type Props = PrimitiveType & ComplexType & EventType;

export default Props;