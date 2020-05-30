import java.net.*;
import java.io.*;

public class GroupChatClient {
    public static void main(String[] args) throws IOException {
        String host = "hostname";
        int port = 4000;

        try (
            Socket sock = new Socket(host, port);
            PrintWriter out = new PrintWriter(
                sock.getOutputStream(), true);
            BufferedReader in = new BufferedReader(
                new InputStreamReader(sock.getInputStream()));
            BufferedReader stdIn = new BufferedReader(
                new InputStreamReader(System.in));
        ) {
            String userInput;
            while ((userInput = stdIn.readLine()) != null) {
                out.println(userInput);
                System.out.println(" I say : " + in.readLine());
            }
        } catch (Exception e) {
            System.err.println("An error occurred in the connection.");
            System.exit(1);
        }
    }
}