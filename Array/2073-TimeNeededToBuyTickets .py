def timeRequiredToBuy(tickets, k):
    sec = 0

    while tickets[k] != 0:
        for t, i in tickets:
            if tickets[i] > 0:
                tickets[i] -= 1
                sec += 1

            if tickets[k] == 0:
                return sec

    return sec


def timeRequiredToBuy2(tickets, k):
    sec = 0

    for i in range(len(tickets)):
        if i <= k:
           sec += min(tickets[i], tickets[k])
        else:
            sec += min(tickets[i], tickets[k]-1)

    return sec