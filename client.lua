RegisterCommand("help", function()
    msg(" Seems Like you need help? Join our discord: ")
end)

function msg(text)
    TriggerEvent("chatMessage", "[Server]", {255, 0, 170}, text)
end
