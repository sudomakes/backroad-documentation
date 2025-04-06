export const FunctionDocumentationTable = (props: { title: string, type?: "component" | "container", inputs: { [key in string]: { type: string, description: string } } }) => {
  const finalProps = ({ ...props.inputs, ...(props.type !== "container" ? { id: { type: "string", description: "a string identifier which can be used to make sure values of components don't get mixed up across re-render. If this is not passed manually, an id is generated automatically" } } : { children: { type: "array[BackroadNode]", description: "children bro" } }) })

  return <div className="border not-content">
    <div className="p-4 bg-primary text-primary-content font-medium">Function Definition</div>
    <div className="p-4 font-semibold border-b">
      <code className="bg-transparent not-content">{props.title}</code>
    </div>
    <div className="grid grid-cols-3">
      <div className="p-4 font-semibold border-r">
        Props
      </div>
      <div className="col-span-2 grid grid-cols-3 "  >
        {Object.entries({ ...finalProps, }).map(([name, data]) => {
          return <>
            <div className="font-medium p-4  border-b">{name}:</div>
            <div className="col-span-2 prose p-4  max-w-none border-b border-l"
              dangerouslySetInnerHTML={{ __html: data.description }}
            >

            </div>
          </>

        })}

      </div>
    </div>
  </div>
}