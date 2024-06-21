import Link from "next/link"

export default function PaginationBar({
    pageCount,
    baseLink,
    pageParam = 'page',
    currentPage = 15,
    showControls,
    itemLimit = 7,
    boundaries = 3
}) 
{

    let beforeActive = []
    let fromActive = []
    let beforeBreakpoints = []
    let afterBreakpoints = []

    const isFarFromStart = boundaries+1 < currentPage
    const isFarFromEnd = pageCount-boundaries > currentPage
    let maxFromActiveItems = 5
    
    if (isFarFromStart && isFarFromEnd) maxFromActiveItems = 3

    for (let i = 1; i <= pageCount; i++) 
    {
        if (pageCount > itemLimit)
        {
            if (isFarFromStart && beforeBreakpoints.length === 0){
                beforeBreakpoints.push(i)
            }

            if (i === pageCount && isFarFromEnd) {
                afterBreakpoints.push(i)
            }

            if (fromActive.length < maxFromActiveItems)
            {
                // Ignoring hidden elements at start
                if (isFarFromEnd && isFarFromStart){
                    if (i-boundaries <= 0) continue
                }
                else if (isFarFromStart && pageCount - maxFromActiveItems >= i) continue
                fromActive.push(i)
            }
        }
        else
        {
            fromActive.push(i)
        }
        
    }

    const renderItems = function (items = []) {
        return items.map(page => {
            const isActive = page === currentPage
            
            return (
                <PaginationItem key={page} isActive={isActive} 
                    href={`${baseLink}${pageParam}=${page}`}>

                    {page}

                </PaginationItem>
            )
        })
    }

    return (
        <div className="flex justify-center space-x-3 sm:space-x-4 mt-10">
            { renderItems(beforeBreakpoints) }

            { beforeBreakpoints.length > 0 && <DisabledPaginationItem /> }

            { renderItems(fromActive) }

            { afterBreakpoints.length > 0 && <DisabledPaginationItem /> }

            { renderItems(afterBreakpoints) }
		</div>
    )
}


function PaginationItem({
    children,
    href,
    isActive = false
}) 
{
    return (
        <Link href={href} 
            className={`h-10 w-10 rounded-md border border-grey-soft cursor-pointer flex 
                justify-center items-center duration-200 hover:bg-primary hover:text-white
                ${isActive ? 'bg-primary text-white font-semibold' : 'bg-white text-iron'}`}>
            
            {children}

        </Link>
    )
}

function DisabledPaginationItem() 
{
    return (
        <div className="h-10 w-10 bg-grey-soft border border-gray-200 rounded-md 
            flex items-center justify-center">
            ...
        </div>
    )
}