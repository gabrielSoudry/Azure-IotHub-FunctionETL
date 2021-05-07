import { AzureFunction, Context } from "@azure/functions"

const IoTHubTrigger: AzureFunction = async function (context: Context, IoTHubMessages: any[]): Promise<void> {
    context.log(`Eventhub trigger function called for message array: ${IoTHubMessages}`);
        
    IoTHubMessages.forEach(message => {
        context.log(`Processed  message: ${message}`);
        context.bindings.outputDocument = message;
    });

    context.res = {
        status: 200,
        body: 'Successfully persisted document'
    };
};

export default IoTHubTrigger;
