import java.util.*;
class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int answer = 0;
        
        
        List<Integer> lostList = new ArrayList<>();
        List<Integer> reserveList = new ArrayList<>();
        
        for (int l : lost) {
            boolean isInReserve = false;
            for (int r : reserve) {
                if (l == r) {
                    isInReserve = true;
                    break;
                }
            }
            if (!isInReserve) {
                lostList.add(l);
            }
        }

        for (int r : reserve) {
            boolean isInLost = false;
            for (int l : lost) {
                if (r == l) {
                    isInLost = true;
                    break;
                }
            }
            if (!isInLost) {
                reserveList.add(r);
            }
        }
        
        // 정렬
        Collections.sort(lostList);
        Collections.sort(reserveList);
        
        // 여분 체육복을 빌려줌
        for (int i = 0; i < lostList.size(); i++) {
            for (int j = 0; j < reserveList.size(); j++) {
                if (lostList.get(i) - 1 == reserveList.get(j) || lostList.get(i) + 1 == reserveList.get(j)) {
                    reserveList.remove(j);
                    lostList.remove(i);
                    i--; // 요소를 제거했으므로 인덱스를 조정
                    break;
                }
            }
        }
        
        return n - lostList.size();
        
    }
}