import com.ibm.watson.developer_cloud.assistant.v1.Assistant;
import com.ibm.watson.developer_cloud.assistant.v1.model.InputData;
import com.ibm.watson.developer_cloud.assistant.v1.model.MessageOptions;
import com.ibm.watson.developer_cloud.assistant.v1.model.MessageResponse;

import java.util.Scanner;

public class WatsonAPI {
    public static void main(String[] args) {
        Assistant service = new Assistant("2018-02-16");
        service.setUsernameAndPassword("39ae7769-bc65-4ed2-bab7-51387ab90fcb", "rp3lkjPldIQP");
        String workspaceId = "112bc9ca-523b-4c47-8a35-d491afc6d427";
        Scanner scanner = new Scanner(System.in);

        while (true) {
            String inStr = scanner.nextLine();
            InputData input = new InputData.Builder(inStr).build();
            MessageOptions options = new MessageOptions.Builder(workspaceId)
                    .input(input)
                    .build();
            MessageResponse response = service.message(options).execute();
            System.out.println(response);
        }
    }
}