class Solution {

    public String encode(List<String> strs) {
        var output = new StringBuilder();
        for(String string : strs) {
            output.append(string.length());
            output.append(":");
            output.append(string);
        }
        System.out.println(output.toString());
        return output.toString();
    }

    public List<String> decode(String str) {
        var output = new ArrayList<String>();
        for(int i = 0; i < str.length();) {
            int countEndIndex = str.indexOf(":", i);
            int count = Integer.parseInt(str.substring(i, countEndIndex));
            output.add(str.substring(countEndIndex + 1, countEndIndex + 1 + count));
            i = countEndIndex + 1 + count;
        }
        return output;
    }
}
