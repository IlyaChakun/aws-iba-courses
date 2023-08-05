package iba.exception;


public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String id) {
        super("Resource with  id = " + id + " not found");
    }

}
