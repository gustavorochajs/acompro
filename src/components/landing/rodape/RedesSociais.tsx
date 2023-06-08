import {IconBrandYoutube, IconBrandInstagram, IconBrandFacebook, IconBrandGithub} from "@tabler/icons-react"
import RedeSocial from "./RedeSocial";

export default function RedesSociais(){
    return (
        <div className="flex">
            <RedeSocial icone={<IconBrandFacebook/>} url="https://www.facebook.com"/>
            <RedeSocial icone={<IconBrandInstagram/>} url="https://www.instagram.com"/>
            <RedeSocial icone={<IconBrandYoutube/>} url="https://www.youtube.com"/>
            <RedeSocial icone={<IconBrandGithub/>} url="https://www.github.com"/>
        </div>
    )
}