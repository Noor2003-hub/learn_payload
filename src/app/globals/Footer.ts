import {GlobalConfig} from "payload"
import {beforeValidateHook} from "./hooks/index"
export const Footer: GlobalConfig={
    slug:'footer',
    fields:[
        {
            name:'logo',
            label:'Logo',
            type:'upload',
            relationTo:'media',
            required:true
        },
        {
            name:'nav',
            label:'Navigation',
            type:'array',
            fields:[
            {
                name:'label',
                label:'Label',
                type:'text'
            },
            {
                name:'link',
                label:'Link',
                type:'text'
            }
            ],
            minRows:1
        },
        {
            name:'copyrightNotice',
            label:'Copyright Notice',
            type:'text',
            required:true
            
        },
    ],
    hooks:{
        beforeValidate:[beforeValidateHook]
    }
}