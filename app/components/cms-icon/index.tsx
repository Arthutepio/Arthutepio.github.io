type CMSIconProps = {
    icon: string
}

export const CMSIcon = ({ icon }: CMSIconProps) => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: icon,
            }}
        /> // renderiza um html que está contida em uma string
    )
}