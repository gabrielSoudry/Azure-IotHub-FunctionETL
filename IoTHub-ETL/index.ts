import { AzureFunction, Context } from "@azure/functions"

const eventGridTrigger: AzureFunction = async function (context: Context, eventGridEvent: any): Promise<void> {
    context.log(eventGridEvent.data.body);
    context.bindings.outputDocument = eventGridEvent.data.body;
    context.res = {
        status: 200,
        body: 'Successfully persisted document'
    };
};

export default eventGridTrigger;
