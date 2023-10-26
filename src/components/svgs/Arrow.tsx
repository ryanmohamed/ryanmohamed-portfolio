export default function Arrow ({ className, ...props }: {
    className: string
}) {
    return (
        <svg className={`${className}`} {...props} version="1.1" viewBox="0 0 800 800">
            <g strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="34 26" transform="rotate(68, 400, 400)">
            <path d="M238.19827270507812 332.9696960449219Q649.1982727050781 -111.03030395507812 538.1982727050781 632.9696960449219 " markerEnd="url(#SvgjsMarker3584)">
                </path>
            </g>
            <defs>
            <marker markerWidth="6" markerHeight="6" refX="3" refY="3" viewBox="0 0 6 6" orient="auto" id="SvgjsMarker3584">
                <polyline points="0,3 3,1.5 0,0" fill="none" strokeWidth="1"  strokeLinecap="round" transform="matrix(1,0,0,1,1,1.5)" strokeLinejoin="round">
                </polyline>
            </marker>
            </defs>
        </svg>
    );
}