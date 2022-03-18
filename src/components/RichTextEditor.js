import React, { useState } from "react";
import { Text, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView } from "react-native";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";


const RichTextEditor = () => {
    const richText = React.useRef();
    const [article, setArticle] = useState("");
    console.log(article, "article");
    return (
        <SafeAreaView>
            <RichToolbar
                editor={richText}
                actions={[actions.setBold, actions.setItalic, actions.setUnderline]}

            />
            <ScrollView>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                    <Text style={{ textAlign: "center" }}>Write your blog here:</Text>
                    <RichEditor
                        ref={richText}
                        onChange={(text) => setArticle(text)}
                        placeholder="Write Something"

                    />
                </KeyboardAvoidingView>

            </ScrollView>


        </SafeAreaView>
    );
};

export default RichTextEditor;