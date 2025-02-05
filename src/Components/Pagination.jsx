export default function Pagination({count, idx, setSlideIdx}) {
    function Render() {
        let htmlEl = []
        for (let i = 0; i < count; i++) {
            htmlEl.push(<span key={`dot-${i}`} className={`${idx === i + 1 ? 'dot active' : 'dot'}`}
                              onClick={() => setSlideIdx(i + 1)}></span>)
        }
        return htmlEl;
    }

    return (<Render/>)
}