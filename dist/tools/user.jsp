<%-- 
    Document   : user.jsp
    Created on : Dec 14, 2019, 5:14:32 PM
    Author     : minhhoangdang
--%>

<%@page import="com.google.appengine.api.blobstore.UploadOptions"%>
<%@ page import="com.google.appengine.api.blobstore.BlobstoreServiceFactory" %>
<%@ page import="com.google.appengine.api.blobstore.BlobstoreService" %>

<%
    BlobstoreService blobstoreService = BlobstoreServiceFactory.getBlobstoreService();
%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>user-util</title>
    </head>
    <body>
        <!--<script src="scripts/app.js"></script>-->
        <div id="container">
            <form action="<%= blobstoreService.createUploadUrl("/_servlet/upload-img", UploadOptions.Builder.withGoogleStorageBucketName("tinyinsta-image-service"))%>" method="post" enctype="multipart/form-data">
                <ul>
                    <li>Username: <input type="text" name="username"></li>
                    <li>Name:<input type="text" name="name"></li>
                    <li>Profile picture:<input type="file" name="avatar"> </li>
                    <li><input type="submit" value="Submit"></li>
                </ul>
            </form>
        </div>
    </body>
</html>
