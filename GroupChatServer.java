/** Elijah Eaton, 30MAY2020
 *  Some credit to Oracle's EchoServer. 
 */

 import java.net.*;
 import java.io.*;

 public class GroupChatServer {
    
    public static void main(String[] args) {
        /*
        if (args.length != 1) {
            System.err.println("Usage: java GroupChatServer <port number>");
            System.exit(1);
        }
        int port = Integer.parseInt(args[0]);

        */
        int port = 4000;
        try (
            // system-independent implementation of a server
            ServerSocket sock = new ServerSocket(port);

            // accept a connection to the socket
            Socket client = sock.accept();

            // output stream 
            PrintWriter out = 
                new PrintWriter(client.getOutputStream(), true);
        
            // input stream
            BufferedReader in = new BufferedReader(
                new InputStreamReader(client.getInputStream()));
        ) {
        
            System.out.println("Welcome, what should we call you?");
            String name = null;
            while (name == null) {
                name = in.readLine();
            }
            out.println("Welcome " + name + "!");

            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                out.println(inputLine);
            }
        } catch (IOException e) {
            System.err.println("Error occurred connecting to port " + port);
        }
        catch (Exception e) {
            System.err.println("Error");
        }

    }

}