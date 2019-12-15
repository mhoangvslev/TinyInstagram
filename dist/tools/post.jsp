<%-- 
    Document   : post.jsp
    Created on : Dec 14, 2019, 5:14:43 PM
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
        <title>post-util</title>
    </head>
    <body>
        <!--<script src="scripts/app.js"></script>-->
        <div id="container">
            <form action="<%= blobstoreService.createUploadUrl("/_servlet/post-util", UploadOptions.Builder.withGoogleStorageBucketName("tinyinsta-image-service"))%>" method="post" enctype="multipart/form-data">
                <input type="hidden" id="post-util-form-ownerId" name="ownerId" value="">
                <input type="hidden" id="post-util-form-action" name="actionType" value="">
                <input type="hidden" id="post-util-form-postId" name="postId" value="">
                <ul>
                    <li>Image:<input type="file" name="imageURL" required></li>
                    <li>Caption:<input type="text" name="caption" required> </li>
                    <li><input type="submit" value="Submit"></li>
                </ul>
            </form>
        </div>
    </body>
</html>
