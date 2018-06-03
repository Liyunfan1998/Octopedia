import com.ibm.watson.developer_cloud.assistant.v1.Assistant;
import com.ibm.watson.developer_cloud.assistant.v1.model.InputData;
import com.ibm.watson.developer_cloud.assistant.v1.model.MessageOptions;
import com.ibm.watson.developer_cloud.assistant.v1.model.MessageResponse;
import jdk.internal.org.xml.sax.InputSource;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import java.io.IOException;
import java.io.StringReader;
import java.io.StringWriter;
import java.util.Scanner;

public class WatsonAPI {
    public static String getXMLData() {
        return "<a attr='value'></a>";
    }

    public void javaDom() {
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        Document doc = null;
        try {
            doc = factory.newDocumentBuilder().parse(
                    String.valueOf(new InputSource(new StringReader(getXMLData()))));
        } catch (ParserConfigurationException e) {
            e.printStackTrace();
        } catch (SAXException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        createElement(doc.getDocumentElement(), "new");

        System.out.println(documentToString(doc));

    }

    public static Element createElement(Element parent, String name) {
        Document document;
        Element element;

        document = parent.getOwnerDocument();
        element = document.createElement(name);

        parent.appendChild(element);
        return element;
    }

    public static String documentToString(Document document) {
        try {
            TransformerFactory tf = TransformerFactory.newInstance();
            Transformer trans = tf.newTransformer();
            StringWriter sw = new StringWriter();
            trans.transform(new DOMSource(document), new StreamResult(sw));
            return sw.toString();
        } catch (TransformerException tEx) {
            tEx.printStackTrace();
        }
        return null;
    }

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