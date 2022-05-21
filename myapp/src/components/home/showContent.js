export const ShowContent = (item) => {
    const { submenus } = item;
    console.log(submenus)
    return (
        <div>
            {submenus ? submenus.map((item) => (
                <>
                    {item.name}
                </>
            ))
                : 'nothing'}
        </div>
    )
}
