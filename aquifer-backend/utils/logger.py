import logging

logs = []

logging.basicConfig(
    filename="logs/agent.log",
    level=logging.INFO,
    format="%(asctime)s - %(message)s"
)

def log(message):

    logs.append(message)

    logging.info(message)

    print(message)


def get_logs():
    return logs