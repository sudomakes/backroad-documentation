


export const CodePlayground = (props: { id: string }) => {
    // const ref = useRef<HTMLDivElement>(null)
    // useRef(() => {
    //     sdk.embedProjectId(
    //         ref.current,
    //         'stackblitz-starters-omj9bh',
    //         {
    //             forceEmbedLayout: true,
    //             openFile: 'index.js',
    //             hideExplorer: true,
    //             hideNavigation: true,
    //         }
    //     );
    // }, [])
    return <iframe className="my-10" style={{ width: "100%", height: "60vh" }} src={`https://stackblitz.com/edit/${props.id}?embed=1&file=index.js&hideExplorer=1&hideNavigation=1`} />

}
// return <Sandpack theme={"dark"} template="node" customSetup={{
//     dependencies: {
//         "@backroad/backroad": "*"
//     }
// }} files={{
//     "index.js": `const {run} = require("@backroad/backroad")
//     run(
//       async (br) => {
//         br.write({body:"hi"})
//       },
//       { port: 3000 }
//     );
//     `}} />